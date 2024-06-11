import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function GET() {

    const res = await prisma.dinnerFoods.findFirst();
    const dinner = JSON.parse(res?.dinner!)

    return NextResponse.json(dinner, {status: 201})
}