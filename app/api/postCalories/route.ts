import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../libs/option";

export async function POST(req: NextRequest) {
    
    
    try {
        const session = await getServerSession(authOptions);

        const body = await req.json();
        const {data} = body;
        const {mealType, foodItem, calories, date, fruit, meat, vegetable, drink, carb} = data;
        console.log(data);
        
        const fruitCalories = fruit === '' ? 0 : data?.fruit?.caloriesPerServingSize
        const meatCalories = meat === '' ? 0 : data?.meat?.caloriesPerServingSize
        const vegetableCalories = vegetable === '' ? 0 : data?.vegetable?.caloriesPerServingSize
        const drinkCalories = drink === '' ? 0 : data?.drink?.caloriesPerServingSize
        const carbsCalories = carb === '' ? 0 : data?.carb?.caloriesPerServingSize;
        const totalCal = fruitCalories + meatCalories + vegetableCalories + drinkCalories + calories + Number(carbsCalories)

        console.log(totalCal)

        if (!session) {
            throw new Error('no session found')
        }

        const user = await prisma.user.findUnique({
            where: { id: session?.user?.id }
        });




        const existingRecord = await prisma.calorieIntake.findFirst({
            where: {
                userId: user?.id,
                createdAt: date
            }
        });

        if (existingRecord) {
            
           throw new Error('A calorie intake record already exists for this date');
        }

        const res = await prisma.calorieIntake.create({
            data: {
                totalCalories: totalCal,
                date: date,
                mealType: mealType,
                foodItem: foodItem,
                fruit: fruit,
                meat: meat,
                vegetable: vegetable,
                carbs: carb,
                drink: drink,
                user: {connect: {id: user?.id}}
            }
        });

        console.log(user);
        return NextResponse.json(res);
    } catch (error) {
        console.error("Error in POST endpoint:", error);
        return new NextResponse('Internal server error', {status: 500});
    }
}