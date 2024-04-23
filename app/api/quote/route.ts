import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function GET() {
    
    const quo = await prisma.quote.findMany();

    console.log(quo)

    return NextResponse.json({quote: 'quote will go here'})
    
}