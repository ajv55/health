import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function GET(){

    const res = await prisma.fruits.findMany();

    const data = JSON.parse(res[0].Fruits!)
    const cleanup = JSON.parse(data!)

    return NextResponse.json({cleanup})
}