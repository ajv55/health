import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";



export async function GET() {


    const res = await prisma.highFatFoods.findFirst();

    const fatFoods = JSON.parse(res?.fatFoods!)

    return NextResponse.json(fatFoods, {status: 201})
}