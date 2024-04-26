import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    const body = req.json();
    console.log(body);

    return NextResponse.json({hello: "hellow"})
}