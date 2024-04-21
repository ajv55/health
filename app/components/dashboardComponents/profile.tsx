'use client';
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import {useSession} from 'next-auth/react'
import Image from "next/image";
import maleImg from '@/public/malePlaceholder.jpg';
import femaleImg from '@/public/femalePlaceholder.jpg';


export default function Profile() {
    const {data: session, status} = useSession();

    const usersGender = session?.user?.gender;
    const usersName = session?.user?.name;
    const usersCalories = session?.user?.calories

  return (
    <div className='w-[37%] h-[28rem] rounded-3xl bg-slate-200 flex flex-col'>
        <div className='w-full p-3 h-20 bg-gradient-to-br from-slate-500 via-slate-900 to-slate-600 rounded-2xl flex justify-between items-center'>
            <h1 className='text-4xl text-white font-bold tracking-wider'>My Profile</h1>
            <div className=" flex justify-center items-center gap-5">
                <CgProfile onClick={() => console.log('this is where a modal will pop up and we can showcase the user profile and settings')} size={37} className=' cursor-pointer' color='white'/>
                <Link href='/signOut'  className='text-3xl rounded-2xl text-white bg-slate-500 px-2.5 py-2.5  text-center'>Sign Out</Link>
            </div>
        </div>

        {/* container for profile user information name, img, etc */}
        <div className="w-full h-[40%] flex gap-2 border border-red-500">
            <div className="w-[30%] ml-2 flex justify-center items-center">
               <Image src={usersGender === 'Male' ? maleImg : femaleImg} alt={usersGender === 'Male' ? 'Male-Img' : 'Female-Img'} width={140} height={140} className="rounded-full"></Image>
            </div>
            
            <div className=" border-blue-500 w-[45%] flex flex-col justify-center items-start">
                <h1 className="text-4xl font-bold tracking-wider">{usersName}</h1>
                <h6>Maintenance Caloires: {usersCalories}</h6>
            </div>
        </div>
    </div>
  )
}
