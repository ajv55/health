import { authOptions } from "@/app/libs/option";
import prisma from "@/app/libs/prismadb";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server"


export async function POST(req: NextRequest) {

    const session = await getServerSession(authOptions)

    const body = await req.json();

    console.log(body);

    const {proteinGrams, carbGrams, fatGrams, satFatGrams, transFatGrams, sodiumMg, calciumMg, fiberGrams, proteinPercent, carbPercent, fatPercent } =  body;

    const existMarcos = await prisma.macronutrient.findUnique({
        where: {userId: session?.user.id}
    })

    if(existMarcos) {
        return NextResponse.json(existMarcos, {status: 201})
    }
    console.log(existMarcos)

    const macronutrient = await prisma.macronutrient.create({
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
          fatPercent
        }
      });


    return NextResponse.json(macronutrient, {status: 201})
}