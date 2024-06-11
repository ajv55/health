import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function GET() {

    const res = await prisma.lunchFoods.findFirst();

    const lunch = JSON.parse(res?.lunch!)

    return NextResponse.json(lunch, {status: 201})
}