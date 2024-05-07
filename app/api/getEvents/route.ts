import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function GET() {

    const res = await prisma.workout.findMany();

    return NextResponse.json({res})
}