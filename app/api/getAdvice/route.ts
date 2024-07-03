import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function GET() {

    const res = await prisma.advice.findFirst();

    const advice = JSON.parse(res?.advice!)

    return NextResponse.json(advice, {status: 201})
}