import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getSessionUser } from "@/lib/auth";
import { createProduct, getProductById, listProducts, listStorefronts } from "@/lib/db";

const productSchema = z.object({
  name: z.string().min(2).max(120),
  category: z.string().min(2).max(40),
  description: z.string().min(10).max(500),
  price: z.number().positive(),
  stock: z.number().int().min(0),
  digital: z.boolean(),
  image_emoji: z.string().max(10),
});

export async function GET() {
  return NextResponse.json({ products: listProducts(), storefronts: listStorefronts() });
}

export async function POST(request: NextRequest) {
  const user = getSessionUser(request);
  if (!user || (user.role !== "vendor" && user.role !== "admin")) {
    return NextResponse.json({ error: "Vendor access required to publish products." }, { status: 403 });
  }

  try {
    const body = await request.json();
    const parsed = productSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Product details are invalid." }, { status: 400 });
    }

    const product = createProduct({
      sellerId: user.id,
      name: parsed.data.name,
      description: parsed.data.description,
      category: parsed.data.category,
      price: parsed.data.price,
      stock: parsed.data.stock,
      digital: parsed.data.digital,
      imageEmoji: parsed.data.image_emoji,
    });

    return NextResponse.json({ product }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Unable to list product." }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  const user = getSessionUser(request);
  if (!user) {
    return NextResponse.json({ error: "Authentication required." }, { status: 401 });
  }

  const body = await request.json();
  const productId = body.productId as string;
  const product = getProductById(productId);
  if (!product) {
    return NextResponse.json({ error: "Product not found." }, { status: 404 });
  }

  if (product.seller_id !== user.id && user.role !== "admin") {
    return NextResponse.json({ error: "You are not authorized to modify this product." }, { status: 403 });
  }

  return NextResponse.json({ ok: true, product });
}
