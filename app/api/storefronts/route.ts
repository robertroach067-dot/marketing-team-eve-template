import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getSessionUser } from "@/lib/auth";
import { createStorefront, listStorefronts } from "@/lib/db";

const storefrontSchema = z.object({
  name: z.string().min(2).max(120),
  tagline: z.string().min(2).max(160),
  description: z.string().min(10).max(500),
});

export async function GET() {
  return NextResponse.json({ storefronts: listStorefronts() });
}

export async function POST(request: NextRequest) {
  const user = getSessionUser(request);
  if (!user || (user.role !== "vendor" && user.role !== "admin")) {
    return NextResponse.json({ error: "Vendor access required to create a storefront." }, { status: 403 });
  }

  try {
    const body = await request.json();
    const parsed = storefrontSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Store details are invalid." }, { status: 400 });
    }

    const storefront = createStorefront({
      ownerId: user.id,
      name: parsed.data.name,
      tagline: parsed.data.tagline,
      description: parsed.data.description,
    });

    return NextResponse.json({ storefront }, { status: 201 });
  } catch (error) {
    console.error("Storefront create error", error);
    return NextResponse.json({ error: "Unable to create storefront." }, { status: 500 });
  }
}
