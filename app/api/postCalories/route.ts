import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/route";

export async function POST(req: NextRequest) {
    
    
    try {
        const session = await getServerSession(options);

        const body = await req.json();
        const {data} = body;
        const {mealType, foodItem, calories, date} = data;
        console.log(data);
        
        console.log(session?.user.id);

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
                totalCalories: Number(calories),
                date: date,
                mealType: mealType,
                foodItem: foodItem,
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