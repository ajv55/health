import Image from 'next/image'
import React from 'react'
import Workout from '@/public/file.png';
import Quote from './quote';

export default function DashHeader() {
  return (
    <div className='w-full h-[25rem] flex justify-between items-center rounded-2xl bg-slate-900 '>
        <div className=' w-[70%] h-content '>
            <Quote/>
        </div>
        <Image className='rounded-xl p-2 bg-transparent ' src={Workout} alt='workout-img' width={350} height={350}></Image>
    </div>
  )
}
