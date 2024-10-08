import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import { getServerSession } from "next-auth";
import { authOptions } from "../../libs/option";
import prisma from "@/app/libs/prismadb";

export async function POST(req: NextRequest) {

    const session = await getServerSession(authOptions);

    const body = await req.json();
    const {currentPassword, newPassword} = body
    console.log(currentPassword, newPassword)

    if (!currentPassword || !newPassword) {
        return NextResponse.json({ error: "Current and new password required", status: 400 });
      }

      if(currentPassword !== newPassword) {
        return NextResponse.json({error: 'Password do not match', status: 401})
      }

    try {
        const user = await prisma.user.findUnique({
            where: { email: session?.user?.email },
            });

            const hashedPassword = await bcrypt.hash(newPassword, 10);

            const u = await prisma.user.update({
            where: { email: session?.user?.email },
            data: { hashedPassword },
            });

            console.log(u)

            return NextResponse.json({message:'Successfully updated user password', status: 200})
    } catch (error) {
    return NextResponse.json({ error: "Error updating password" , status: 500});
    }

}