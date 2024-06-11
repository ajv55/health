import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function GET() {

    const res = await prisma.breakfastFoods.findFirst();
    const breakfast = JSON.parse(res?.breakfast!)


    return NextResponse.json(breakfast, {status: 201})
}