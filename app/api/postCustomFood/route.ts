import { authOptions } from "@/app/libs/option";
import prisma from "@/app/libs/prismadb";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest){

    const session = await getServerSession(authOptions);

    const body = await req.json();
    console.log(body);
    const {foodName, servingName, servingWeight, calories, totalFats, saturatedFat, transFat, protein, carbs, fiber, sugar, addedSugar, potassium, calcium, sodium, cholesterol, iron } = body?.data

    const customFood = await prisma.customFood.create({
        data: {
            user: {connect: {id: session?.user.id} },
            name: foodName,
            servingName,
            servingSize: servingWeight,
            calories: Number(calories),
            fat: Number(totalFats),
            protein: Number(protein),
            carbs: Number(carbs),
            satFat: Number(saturatedFat),
            transFat: Number(transFat),
            fiber: Number(fiber),
            calcium: Number(calcium),
            sugar: Number(sugar),
            addedSugar: Number(addedSugar),
            cholesterol: Number(cholesterol),
            potassium: Number(potassium),
            sodium: Number(sodium),
            iron: Number(iron)
        }
    })
    

    return NextResponse.json(customFood, {status: 201})
}