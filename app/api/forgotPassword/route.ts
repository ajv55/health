import { authOptions } from "@/app/libs/option";
import prisma from "@/app/libs/prismadb";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import crypto from 'crypto';

// Create a Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

// Token generation helper
const generateResetToken = () => {
  return crypto.randomBytes(32).toString('hex');
};

// Send email function
async function sendResetEmail(email: string, token: string) {
  // Construct the reset URL based on your Next.js dynamic route
  const resetUrl = `${process.env.URL}/reset/${token}`;
  
  await resend.emails.send({
    from: 'Abel <abel@myfitgenius.com>',
    to: email,
    subject: 'Password Reset',
    html: `<p>Click <a href="${resetUrl}">here</a> to reset your password.</p>`
  });
}

export async function POST(req: NextRequest) {

    const session = await getServerSession(authOptions);
    
    const body = await req.json();

    const {email} = body;

     // Check if the email exists in your DB
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return NextResponse.json({ message: 'No user found with that email' }, { status: 404 });
        }

        // Generate a token and expiration
        const token = generateResetToken();
        const tokenExpires = new Date(Date.now() + 3600000); // Token valid for 1 hour

  
         // Save the token and expiry in the database
          await prisma.user.update({
            where: { email },
            data: { resetToken: token, resetTokenExpires: tokenExpires }
          });

          // Send email with the token link
          await sendResetEmail(email, token);


    return NextResponse.json('Reset link sent to your email',{status: 201})
}