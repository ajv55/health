import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function GET(){

    const res = await prisma.catalog.findFirst();


    return NextResponse.json(JSON.parse(res?.catalog!), {status: 201})
}