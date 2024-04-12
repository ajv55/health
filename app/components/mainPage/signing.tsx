'use client';
import {signIn, signOut} from 'next-auth/react'
import Link from 'next/link';
import {useSession} from 'next-auth/react'

export default function Signing() {
    const {data: session} = useSession();
  return (
    <div className='border text-xl'>
        {!session ? <Link className='bg-slate-100 px-2.5 py-3 ' href='/login'>Sign-In</Link> : <Link className='bg-slate-100 px-2.5 py-3 ' href='/signOut'>Sign-Out</Link> }
        
        
    </div>
  )
}
