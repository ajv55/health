
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '@/app/libs/prismadb';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/libs/option';

export async function POST(req: NextRequest) {

  const { token, newPassword } = await req.json();

  console.log(token, newPassword)

  // Find the user by reset token and validate token expiration
  const user = await prisma.user.findFirst({
    where: {
      resetToken: token,
      resetTokenExpires: {
        gte: new Date(), // Check if the token is still valid
      },
    },
  });

  console.log(user)

  if (!user) {
    return NextResponse.json({ error: 'Invalid or expired token' }, { status: 400 });
  }

  // Hash the new password
  const hashedPassword = await bcrypt.hash(newPassword, 12);

  // Update the user's password and clear the reset token and expiration
  await prisma.user.update({
    where: { id: user.id},
    data: {
      hashedPassword,
      resetToken: null,
      resetTokenExpires: null,
    },
  });

  return NextResponse.json({ message: 'Password reset successfully' });
}
