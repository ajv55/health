import bcrypt from 'bcrypt';
import prisma from '@/app/libs/prismadb';
import { NextRequest, NextResponse } from 'next/server';



export async function POST(req: NextRequest) {
    const body =  await req.json();
    const {name, email, password, age, weightInLbs, heightInInches, gender, agree, TDEE, goal } = body;

    console.log(body);



    if(!name || !email || !password || !age || !weightInLbs || !heightInInches || !gender || !agree || !TDEE || !goal) {
        return new NextResponse('Missing Fields', {status: 400, statusText: 'Missing Fields'})
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
            name: name,
            email: email, 
            hashedPassword: hashedPassword,
            age: age,
            weightInLbs: weightInLbs,
            heightInInches: heightInInches,
            gender: gender,
            TDEE: TDEE,
            goal: goal

        }
    })


    

    return NextResponse.json(user)
}

