import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function GET() {
    
   const quo = await prisma.quote.findMany();

   const data = quo && JSON.parse(quo[0]?.quote as string )


    return NextResponse.json({data})
    
}