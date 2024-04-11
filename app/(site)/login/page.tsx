'use client'
import { useState, useRef, useEffect } from "react";
import {signIn, useSession} from 'next-auth/react'
import {toast} from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
    const session = useSession();
    const router = useRouter();

    const ref = useRef<HTMLFormElement>(null);

    const [data, setData] = useState({
        email: '',
        password: ''
})

   useEffect(() => {
    if(session?.status === 'authenticated') {
        router.push('/dashboard')
    }
   })

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        ref.current?.reset()
        console.log('this is where we are going to signin')
        signIn('credentials', {...data, redirect: false}).then((callback) => {
            if(callback?.error) {
                toast.error(callback.error)
            }

            if(callback?.ok && !callback?.error) {
                toast.success('you have successfully logged in')
            }
        })
    }
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
        <h1 className="text-5xl tracking-widest">Sign In</h1>

        <form className="bg-slate-200 w-[43rem] h-[25rem] flex flex-col justify-center items-center gap-8 rounded-xl drop-shadow-sm"  ref={ref} onSubmit={handleSubmit}>
            <input placeholder="example@mail.com"  type="email" value={data.email} onChange={(e) => setData({...data, email: e.target.value}) } name="" id="email" />
            <input placeholder="Enter password" type="password" value={data.password} onChange={(e) => setData({...data, password: e.target.value}) } name="" id="password" />
            <button type="submit" className="text-3xl px-2.5 py-2 bg-slate-700 text-white">Resigter!</button>
            <div>
                <Link className="underline underline-offset-4 text-blue-500" href={'/reg'}>Sign Up</Link>
            </div>
            <div>
                <button onClick={() => signIn('github')} className="text-3xl px-2.5 py-3 ">Sign in with Github</button>
                <button onClick={() => signIn('google')} className="text-3xl px-2.5 py-3 ">Sign in with Google</button>
            </div>
        </form>

    </div>
  )
}

