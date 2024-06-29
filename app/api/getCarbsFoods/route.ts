import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function GET() {

    const res = await prisma.carbsHighFoods.findFirst();

    const carbs = JSON.parse(res?.carbsFood!)


    return NextResponse.json(carbs, {status: 201})
}