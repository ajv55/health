import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function GET() {

    const res = await prisma.satFatFoods.findFirst();

    const highFoods = JSON.parse(res?.satFatFoods!)

    return NextResponse.json(highFoods, {status: 201})
}