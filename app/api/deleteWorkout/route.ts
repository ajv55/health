import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE(req: NextRequest) {

    const searchParams = await req.nextUrl.searchParams;
    const id = searchParams.get('id');

    try {

        const res = await prisma.workout.delete({
            where: {
                id: id!
            }
        })

        return NextResponse.json({res})
        
    } catch (error) {
        console.error('Error deleting meal:', error);
       return NextResponse.json({ error: 'Internal Server Error' });
    }
}