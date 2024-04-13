import bcrypt from 'bcrypt';
import prisma from '@/app/libs/prismadb';
import { NextRequest, NextResponse } from 'next/server';



export async function POST(req: NextRequest) {
    const body =  await req.json();
    const {name, email, password, age, weightInKg, heightInInches, gender} = body;

    console.log(name, email, password, gender);



    if(!name || !email || !password || !age || !weightInKg || !heightInInches || !gender) {
        return new NextResponse('Missing Fields', {status: 400})
    }
    
    const exist = await prisma.user.findUnique({
        where: {
            email
        }
    });


    if (exist) {
        throw new Error('Email already exists')
    }

    const hashedPassword = await bcrypt.hash(password, 10);



    const user = await prisma.user.create({
        data: {
            name,
            email,
            hashedPassword,
            age,
            weightInKg,
            heightInInches,
            gender,

        }
    });

    

    return NextResponse.json(user)
}



