import Image from 'next/image'
import React from 'react'
import Workout from '@/public/file.png';
import Quote from './quote';

export default function DashHeader() {
  return (
    <div className='w-full  lg:h-[25rem] h-content flex lg:flex-row flex-col justify-between items-center rounded-2xl bg-slate-900 '>
        <div className=' w-full lg:w-[70%] h-content '>
            <Quote/>
        </div>
        <Image className='rounded-xl p-2 bg-transparent lg:w-[22rem] lg:h-[22rem] ' src={Workout} alt='workout-img' width={150} height={150}></Image>
    </div>
  )
}
