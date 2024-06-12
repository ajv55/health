import { authOptions } from "@/app/libs/option";
import prisma from "@/app/libs/prismadb";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions);

    const body = await req.json();
    console.log(body)

    const {
        name,
        calories,
        fat,
        carbs,
        protein,
        sodium,
        transFat,
        satFat,
        calcium,
        fiber,
      } = body;

      const lunchLog = await prisma.lunchLog.create({
        data: {
          name,
          calories,
          fat,
          carbs,
          protein,
          sodium,
          satFat,
          calcium,
          fiber,
          user: {connect: {id: session?.user?.id}},
        },
      });


    return NextResponse.json(lunchLog, {status: 201})
}