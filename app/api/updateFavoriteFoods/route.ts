import { authOptions } from "@/app/libs/option";
import prisma from "@/app/libs/prismadb";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";


export async function PUT(req: NextRequest){

    const session = await getServerSession(authOptions);

    const body = await req.json();
    const food = body?.food;
    const {name, calories, fat, carbs, protein, servingSize, sodium, calcium, fiber } = food;
    const transFat = food['trans fat'];
    const satFat = food['sat fat'];
    console.log(food);


    const user = await prisma.user.findUnique({
        where: { id: session?.user?.id },
        select: { favoriteFoods: true },
      });

      let favoriteFoods: any = user?.favoriteFoods ? user.favoriteFoods : [];
      favoriteFoods = [food, ...favoriteFoods]

      await prisma.user.update({
        where: { id: session?.user?.id },
        data: {
          favoriteFoods
        }
      });


    return NextResponse.json(user, {status: 201})
}