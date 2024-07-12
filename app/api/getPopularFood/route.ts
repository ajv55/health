import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function GET(){

    const res = await prisma.popularFoods.findFirst();

    const popularFood = JSON.parse(res?.popularFoods!)

    return NextResponse.json(popularFood, {status: 201})
}