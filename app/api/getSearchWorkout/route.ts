import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/route";


export async function GET() {
    const session = await getServerSession(options);

    const res = await prisma.searchWorkout.findMany();
    

    const data = JSON.parse(res[0]?.workouts as string);

    return NextResponse.json({data})
}