'use client';
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import {useSession} from 'next-auth/react'
import Image from "next/image";
import maleImg from '@/public/malePlaceholder.jpg';
import femaleImg from '@/public/femalePlaceholder.jpg';
import { use, useEffect, useState } from "react";
import Quote from "./quote";


export default function Profile() {
    const {data: session, status} = useSession();
    const [level, setLevel] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const usersGender = session?.user?.gender;
    const usersName = session?.user?.name.toUpperCase();
    const usersCalories = session?.user?.calories;
    const usersActivityLevel = session?.user?.activity;
    const usersAge = session?.user?.age;
    const usersWeight = session?.user?.weight



    useEffect(() => {
        setIsLoading(true)
        
        if(session) {
            setIsLoading(false)
        }

        if(usersActivityLevel === 'No-Exercise' || usersActivityLevel === 'Light-Exercise') {
            return setLevel('Low-Impact')
        }

        if(usersActivityLevel === 'Moderate-Exercise') {
            return setLevel('Medium-Impact')
        }

        if(usersActivityLevel === 'Heavy-Exercise' || usersActivityLevel === 'Strenuous-Exercise') {
            return setLevel('High-Impact')
        }
    }, [setLevel, usersActivityLevel, isLoading, session]);



  return (
    <div className='w-[45%] mt-4 ml-3 h-content relative rounded-3xl bg-slate-200 flex flex-col justify-start gap-3'>
        {isLoading && <div className="w-full rounded-2xl z-40 absolute top-0 left-0 h-full bg-slate-600">
                    <div role="status" className="w-[95%] p-3 h-[100%] rounded-2xl flex flex-col justify-center item-center gap-5 animate-pulse">
                <div className="h-5 bg-gray-400 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div className="h-4 bg-gray-300 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <div className="h-3 bg-gray-700 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                <span className="sr-only">Loading...</span>
            </div>
            </div>}
        <div className='w-full p-3 h-14 bg-gradient-to-br from-slate-500 via-slate-900 to-slate-600 rounded-2xl flex justify-between items-center'>
            <h1 className='text-2xl text-white font-bold tracking-wider'>My Profile</h1>
            <div className=" flex justify-center items-center gap-3">
                <CgProfile onClick={() => console.log('this is where a modal will pop up and we can showcase the user profile and settings')} size={33} className=' cursor-pointer' color='white'/>
                <Link href='/signOut'  className='text-2xl rounded-2xl text-white px-2 py-2  text-center'>Sign Out</Link>
            </div>
        </div>

        {/* container for profile user information name, img, etc */}
        <div className="w-full h-[40%] flex gap-2 ">
            <div className="w-[30%] ml-2 flex justify-center items-center">
               <Image src={usersGender === 'Male' ? maleImg : femaleImg} alt={usersGender === 'Male' ? 'Male-Img' : 'Female-Img'} width={140} height={140} className="rounded-full"></Image>
            </div>
            
            <div className="  w-[45%] flex flex-col justify-center items-start">
                <h1 className="text-4xl font-bold tracking-wider">{usersName}</h1>
                <h6 className={`${level === 'Medium-Impact' ? 'text-amber-500' : null} ${level === 'Low-Impact' ? 'text-blue-500' : null} ${level === 'High-Impact' ? 'text-red-500' : null} text-xl`} >{level}</h6>
            </div>
        </div>

        <div className=" flex justify-evenly items-center mt-5 w-full h-[6rem]">
            <div className=" w-[29%] h-full flex border-b-2 shadow-md shadow-zinc-950 border-r-2 border-zinc-950  flex-col justify-center items-center">
                <h2 className="text-5xl font-bold tracking-wider ">{usersAge}</h2>
                <h2 className="text-lg text-zinc-500 font-semibold tracking-wider">Age</h2>  
            </div>
            <div className=" flex flex-col border-b-2 border-zinc-950 justify-center  items-center w-[29%] h-full">
                <h2 className="text-5xl font-bold tracking-wider ">{usersCalories}</h2>
                <h2 className="text-lg text-zinc-500 font-semibold tracking-wider text-center">Maintenance Calories</h2> 
            </div>
            <div className=" w-[29%] flex flex-col border-b-2 shadow-md shadow-zinc-950 drop-shadow-lg border-l-2 border-zinc-950 justify-center items-center h-full">
               <h2 className="text-5xl font-bold tracking-wider ">{usersWeight}</h2>
                <h2 className="text-lg text-zinc-500 font-semibold tracking-wider text-center">Current Weight</h2> 
            </div>
        </div>
        <Quote />
    </div>
  )
}
