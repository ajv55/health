import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { json } from "stream/consumers";


export async function GET() {

    const res = await prisma.workoutGuide.findMany();
    const workout = JSON.parse(res[0].workoutGuide!)
    console.log(res)

    return NextResponse.json({workout})
}