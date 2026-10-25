import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getSessionUser } from "@/lib/auth";
import { createReview } from "@/lib/db";

const reviewSchema = z.object({
  productId: z.string().min(1),
  rating: z.number().int().min(1).max(5),
  comment: z.string().min(4).max(500),
});

export async function POST(request: NextRequest) {
  const user = getSessionUser(request);
  if (!user) {
    return NextResponse.json({ error: "Authentication required to review products." }, { status: 401 });
  }

  try {
    const body = await request.json();
    const parsed = reviewSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Review details are invalid." }, { status: 400 });
    }

    const review = createReview({
      productId: parsed.data.productId,
      customerId: user.id,
      rating: parsed.data.rating,
      comment: parsed.data.comment,
    });

    return NextResponse.json({ review }, { status: 201 });
  } catch (error) {
    console.error("Review create error", error);
    return NextResponse.json({ error: "Unable to submit review." }, { status: 500 });
  }
}
