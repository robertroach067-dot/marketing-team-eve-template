import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getSessionUser } from "@/lib/auth";
import { getUserFavoriteIds, toggleFavorite } from "@/lib/db";

const favoriteSchema = z.object({
  productId: z.string().min(1),
});

export async function GET(request: NextRequest) {
  const user = getSessionUser(request);
  if (!user) {
    return NextResponse.json({ favoriteIds: [] });
  }

  return NextResponse.json({ favoriteIds: getUserFavoriteIds(user.id) });
}

export async function POST(request: NextRequest) {
  const user = getSessionUser(request);
  if (!user) {
    return NextResponse.json({ error: "Authentication required to save favorites." }, { status: 401 });
  }

  const body = await request.json();
  const parsed = favoriteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid favorite payload." }, { status: 400 });
  }

  const result = toggleFavorite({ userId: user.id, productId: parsed.data.productId });
  return NextResponse.json({ message: result.action === "added" ? "Product saved to favorites." : "Product removed from favorites.", favoriteIds: result.favoriteIds });
}
