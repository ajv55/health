'use client';
import {signOut, useSession,} from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { use, useEffect } from 'react';


export default function Page() {
    const {data: session, status} = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!session) {
            router.push('/')
        }
    }, [session, router]);

    const handleClick = () => {
        signOut();
    }


  return (
    <div className='bg-slate-700 flex justify-center items-center'>
        <div className='bg-slate-100 w-[23rem] h-[32rem] rounded-xl p-3 flex justify-center items-center flex-col'>
            <h1 className='text-5xl text-center font-bold tracking-wider'>Are you sure you want to sign out?</h1>
            <h6>Bye !, {session?.user?.name}</h6>
            <button onClick={handleClick} className='px-2.3 py-3 bg-slate-200 text-5xl'>Sign Out</button>
        </div>

    </div>
  )
}
