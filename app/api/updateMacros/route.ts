import { authOptions } from "@/app/libs/option";
import prisma from "@/app/libs/prismadb";
import { error } from "console";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";


export async function PUT(req: NextRequest){
    const session = await getServerSession(authOptions)

    const body = await req.json();

    console.log(body);

    const {proteinGrams, carbGrams, fatGrams, satFatGrams, transFatGrams, sodiumMg, calciumMg, fiberGrams, proteinPercent, carbPercent, fatPercent } =  body;

    const user = await prisma.macronutrient.findUnique({
        where: {userId: session?.user.id}
    })

    console.log(user)

    if(!user) {
        return NextResponse.json({error: 'user not found'},{status: 401})
    }

    const macronutrient = await prisma.macronutrient.update({
        where: { id: user?.id },
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
          fatPercent
        }
      });





    return NextResponse.json(macronutrient, {status: 201})

}