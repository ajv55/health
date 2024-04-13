import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    const body = await req.json();
    const { email } = body;

    
    const exist = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    if (exist?.gender === 'Male') {
        const calories = 88.362 + (4.799 * Number(exist.heightInInches)) + (13.397 * Number(exist.weightInKg)) - (5.677 * Number(exist.age))
        await prisma.user.update({
            where: {
                email: email
            }, 
            data: {
                calories: calories.toString()
            }
        })
    }

    if (exist?.gender === 'Female') {
        const calories = 655 + (4.35 * Number(exist.weightInKg)) + (4.7 * Number(exist.heightInInches)) - (4.7 * Number(exist.age)); 
        await prisma.user.update({
            where: {
                email: email
            }, 
            data: {
                calories: calories.toString()
            }
        })
    }


    

    return NextResponse.json(exist)

}