import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function GET() {

    const res = await prisma.meats.findMany();
    const jsonMeats = JSON.parse(res[0]?.Meats!);
    const cleanup = JSON.parse(jsonMeats)

    return NextResponse.json({cleanup})
}