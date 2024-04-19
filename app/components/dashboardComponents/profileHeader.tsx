'use client';
import Link from 'next/link';
import {Suspense} from 'react'
import {useSession} from 'next-auth/react'
import { CgProfile } from "react-icons/cg";
import { CiCircleInfo } from "react-icons/ci";

export default function ProfileHeader() {
    const {data: session, status} = useSession();
  return (
    <div className='bg-slate-500  w-[100%] absolute right-0 h-[6rem] flex justify-between items-end p-1'>
        <Suspense fallback={<p>Loading....</p>}>
          <div className='w-[34%] h-full flex text-4xl tracking-wide justify-center items-center'>
              <h1>Welcome, <span className='font-bold bg-gradient-to-br from-amber-700 via-orange-300 to-amber-300 bg-clip-text text-transparent'>{session?.user.name.toUpperCase()}</span></h1>
          </div>
        </Suspense>

        <div className=' w-[35%] h-full flex flex-col justify-center items-center'>
            <h2 className='text-5xl bg-gradient-to-tr from-yellow-700 via-yellow-300 to-yellow-400 bg-clip-text text-transparent font-bold tracking-wider '>  {session?.user?.calories}</h2>
            <div className='flex gap-2 justify-center items-center'>
              <h5 className='text-sm font-light text-white'>Maintenance Calories</h5>
              <CiCircleInfo size={10} color='white' />
            </div>
        </div>

         <div className='flex justify-center items-center gap-2'>
            <CgProfile onClick={() => console.log('this is where a modal will pop up and we can showcase the user profile and settings')} size={30} className=' cursor-pointer' color='white'/>
           <Link href='/signOut'  className='text-3xl rounded-2xl text-white bg-slate-500 px-2.5 py-2.5  text-center'>Sign Out</Link>
         </div>
      </div>
  )
}
