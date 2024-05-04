import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/route";
import {format} from 'date-fns';
import { error } from "console";


export async function GET() {
    const session = await getServerSession(options);

    if(!session) {
        return new NextResponse('No session found', {status: 403})
    }


    const today = new Date();
    const startOfDay = new Date(today);
    startOfDay.setHours(0, 0, 0, 0); // Set time to 00:00:00.000 for the start of the day
    const endOfDay = new Date(today);
    endOfDay.setHours(23, 59, 59, 999);  // Set time to 23:59:59.999 for the end of the day

    const data = await prisma.calorieIntake.findMany({
        where: {
            userId: session?.user?.id,
            date: {
                gte: startOfDay,
                lte: endOfDay
            }
        }
    })

    if(data.length === 0) {
        return NextResponse.json({error: 'no meal records for today'}, {status: 401})
    }

    



    const fruitCalories = data?.map((d: any) => d?.fruit?.caloriesPerServingSize === '' || d?.fruit?.caloriesPerServingSize === undefined ? 0 : d?.fruit?.caloriesPerServingSize ).reduce((acc, currentValue) => acc + currentValue);
    const carbCalories = data?.map((d: any) => d?.carb?.caloriesPerServingSize === '' || d?.carb?.caloriesPerServingSize === undefined ? 0 : d?.carb?.caloriesPerServingSize).reduce((acc, currentValue) => acc + currentValue);
    const drinkCalories = data?.map((d: any) => d?.drink?.caloriesPerServingSize === '' || d?.drink?.caloriesPerServingSize === undefined ? 0 : d?.drink?.caloriesPerServingSize).reduce((acc, currentValue) => acc + currentValue)
    const meatCalories = data?.map((d: any) => d?.meat?.caloriesPerServingSize === '' || d?.meat?.caloriesPerServingSize === undefined ? 0 : d?.meat?.caloriesPerServingSize).reduce((acc, currentValue) => acc + currentValue)
    const vegCalories = data?.map((d: any) => d?.vegetable?.caloriesPerServingSize === '' || d?.vegetable?.caloriesPerServingSize === undefined ? 0 : d?.vegetable?.caloriesPerServingSize).reduce((acc, currentValue) => acc + currentValue)
    const dailyCalories = data?.map((d) => d?.totalCalories);
    const cal = dailyCalories?.reduce((acc, currentValue) => acc! + currentValue!);
    const total =  Number(meatCalories!) + Number(fruitCalories!) + Number(cal) + Number(vegCalories) + Number(carbCalories) + Number(drinkCalories)

    console.log(dailyCalories)

    return NextResponse.json({total})
}