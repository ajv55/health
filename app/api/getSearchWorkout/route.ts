import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function GET() {

    const res = await prisma.searchWorkout.findMany();

    const data = JSON.parse(res[0]?.workouts as string);

    return NextResponse.json({data})
}