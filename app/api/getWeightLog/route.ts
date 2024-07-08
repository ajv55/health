import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function GET() {

    const weightLogs = await prisma.weightLog.findMany();

    return NextResponse.json(weightLogs, {status: 201})
}