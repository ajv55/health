import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function GET(){

    const res = await prisma.commonCarbs.findFirst();

    const carbs = JSON.parse(res?.carbs!)

    return NextResponse.json(carbs, {status: 201})
}