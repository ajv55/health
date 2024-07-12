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
        servingSize,
        fiber,
      } = body;

      const snackLog = await prisma.snackLog.create({
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
          servingSize,
          transFat,
          user: {connect: {id: session?.user?.id}},
        },
      });

      // Fetch the current user to get their recent foods and premium status
      const user = await prisma.user.findUnique({
        where: { id: session?.user?.id },
        select: { recentFoods: true, isActive: true },
      });

      // Calculate the limit based on the user's subscription status
      const limit = user?.isActive ? 15 : 7;

      // Update the recent foods list
      let recentFoods: any = user?.recentFoods ? user.recentFoods : [];
      recentFoods = [snackLog, ...recentFoods].slice(0, limit); // Keep only the last `limit` items

      // Update the user with the new recent foods
      await prisma.user.update({
        where: { id: session?.user?.id },
        data: {
          recentFoods,
        },
      });


    return NextResponse.json(snackLog, {status: 201})
}