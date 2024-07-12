import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/libs/option";

export async function GET(req: NextRequest) {
  // Get the user's session
  const session = await getServerSession(authOptions);

  // Ensure the user is authenticated
  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Fetch the user's recent foods
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { recentFoods: true },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user.recentFoods, { status: 201 });
}
