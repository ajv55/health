import { authOptions } from "@/app/libs/option";
import prisma from "@/app/libs/prismadb";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  const body = await req.json();
  const {
    proteinGrams,
    carbGrams,
    fatGrams,
    satFatGrams,
    transFatGrams,
    sodiumMg,
    calciumMg,
    fiberGrams,
    proteinPercent,
    carbPercent,
    fatPercent,
  } = body;

  try {
    // Check if macronutrient data already exists for the user
    const existingMacros = await prisma.macronutrient.findUnique({
      where: { userId: session?.user.id },
    });

    if (existingMacros) {
      // Update existing macronutrient data
      const updatedMacros = await prisma.macronutrient.update({
        where: { id: existingMacros.id },
        data: {
          proteinGrams,
          carbGrams,
          fatGrams,
          satFatGrams,
          transFatGrams,
          sodiumMg,
          calciumMg,
          fiberGrams,
          proteinPercent,
          carbPercent,
          fatPercent,
        },
      });

      return NextResponse.json(updatedMacros, { status: 201 });
    } else {
      // Create new macronutrient data
      const newMacros = await prisma.macronutrient.create({
        data: {
          userId: session?.user.id!,
          proteinGrams,
          carbGrams,
          fatGrams,
          satFatGrams,
          transFatGrams,
          sodiumMg,
          calciumMg,
          fiberGrams,
          proteinPercent,
          carbPercent,
          fatPercent,
        },
      });

      return NextResponse.json(newMacros, { status: 201 });
    }
  } catch (error) {
    console.error("Failed to save macronutrient data:", error);
    return NextResponse.json({ error: "Failed to save macronutrient data" }, { status: 500 });
  }
}
