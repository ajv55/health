'use client'; 
import {useSession} from 'next-auth/react';
import Image from 'next/image'
import Male from '@/public/malePlaceholder.jpg';
import { IoSettingsOutline } from "react-icons/io5";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Welcome() {
    const [cal, setCal] = useState(0)

    const {data: session} = useSession();

    const usersCal = Number(session?.user?.calories);
    const recommend = usersCal - 500

    const user = session?.user;
    const activityLevel = user?.activity;

    const getMeals = async () => {
      const res =  await axios.get('/api/getMeal').then((res) => setCal(res?.data?.cal)).catch(() => setCal(0));
    }

    const percentage = (cal! / usersCal) * 100;

    useEffect(() => {
        try {
            
            getMeals()

        } catch (error) {
            console.error('Failed to fetch users meal', error)
        }
    }, [])

    const per = Math.round(percentage);

    console.log(per.toString());

  return (
    <div className='w-[30%] h-screen rounded-2xl bg-slate-900 flex flex-col justify-start items-start'>
        {/* first heading where user image and name go with icon for settings options */}
        <div className='w-full h-28 flex  justify-between items-center'>
            <div className=' w-full flex p-2 gap-2'>
                <Image className='rounded-full' src={Male} alt='user-img' width={90} height={90}></Image>
                <div className='w-full text-white h-content p-2 flex justify-between items-start'>
                    <div className=' w-[75%]  h-full flex flex-col justify-center items-start '>
                        <h1 className='text-2xl font-bold tracking-wide'>Weclome, {user?.name.toUpperCase()}</h1>
                        <span className={`${activityLevel === 'Moderate-Exercise' && 'text-amber-400'}`} >{activityLevel === 'Moderate-Exercise' && 'Medium-Tier'}</span>
                    </div>
                    <div className='w-[15%]  h-14  flex justify-end items-start'>
                        <IoSettingsOutline className='cursor-pointer' size={26} color='white' />
                    </div>
                </div>
            </div>
        </div>

        {/* second section where the users age, height and weight will go */}
        <div className='w-full h-[6rem]  flex justify-between items-center'>
            <div className='w-[30%] h-32 gap-2 flex flex-col justify-center items-center'>
                <span className='text-2xl text-white font-bold tracking-wide'>{user?.weight} lbs</span>
                <h4 className='text-md text-zinc-400 font-light tracking-wide'>Weight</h4>
            </div>
            <div className='w-0.5 h-10 bg-slate-100'></div>
            <div className='w-[30%] h-32 gap-2 flex flex-col justify-center items-center'>
                <span className='text-2xl text-white font-bold tracking-wide'>{user?.height} inches</span>
                <h4 className='text-md text-zinc-400 font-light tracking-wide'>Height</h4>
            </div>
            <div className='w-0.5 h-10 bg-slate-100'></div>
            <div className='w-[30%] h-32 flex gap-2 flex-col justify-center items-center'>
                <span className='text-2xl text-white font-bold tracking-wide'>{user?.age} yrs</span>
                <h4 className='text-md text-zinc-400 font-light tracking-wide'>Age</h4>
            </div>

        </div>

        {/* third section this will be for the users daily goals like caloires inake, water intake */}
        <div className='w-full h-[32rem] border flex flex-col justify-start items-start'>
            <h1 className='text-2xl text-white p-2 text-center font-bold tracking-wide'>Your Daily Goals</h1>
            <div className='w-full h-[17rem] border border-green-300 flex flex-col justify-evenly items-center'>
                <div className='border w-[95%] flex flex-col justify-start items-start'>
                    <div className='w-full flex justify-between items-center'>
                      <span className='text-lg font-light text-white tracking-wide'>Calorie Intake</span>
                      <span className='text-md text-white'>{cal}/{recommend}</span>
                    </div>
                    <div className='w-[100%] h-5 rounded-3xl bg-slate-100'>
                        <div style={{width: `${per}%`}} className={` h-5 rounded-3xl bg-indigo-700`}></div>
                    </div>
                </div>
                <div className='border w-[95%] flex flex-col justify-start items-start'>
                    <span className='text-lg font-light text-white tracking-wide'>Calorie Intake</span>
                    <div className='w-full h-5 rounded-3xl bg-slate-100'>
                        <div className='w-[45%] h-5 rounded-3xl bg-indigo-700'></div>
                    </div>
                </div>
                <div className='border w-[95%] flex flex-col justify-start items-start'>
                    <span className='text-lg font-light text-white tracking-wide'>Calorie Intake</span>
                    <div className='w-full h-5 rounded-3xl bg-slate-100'>
                        <div className='w-[45%] h-5 rounded-3xl bg-indigo-700'></div>
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}
