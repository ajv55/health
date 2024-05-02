import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function GET() {

    const res = await prisma.carbs.findMany();
    const cleanup = JSON.parse(res[0]?.Carbs!);
    const carbs = JSON.parse(cleanup)

    return NextResponse.json({carbs})
}