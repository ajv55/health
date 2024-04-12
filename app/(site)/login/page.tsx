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
    <div className='w-full  h-screen flex justify-center items-center'>
        

        <form className=" bg-gradient-to-tr from-teal-300 via-teal-600 to-teal-200 w-[50%] h-screen p-3 flex flex-col justify-center items-center gap-5  drop-shadow-sm"  ref={ref} onSubmit={handleSubmit}>
        <h1 className="text-7xl text-white  tracking-widest">Sign In</h1>
            <div className="flex flex-col gap-1 w-[75%] justify-center items-start">
              <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Email:</label>
               <input className="px-2.5 py-2 w-full placeholder:text-black bg-slate-200 text-white rounded-xl"  placeholder="example@mail.com"  type="email" value={data.email} onChange={(e) => setData({...data, email: e.target.value}) } name="" id="email" />
            </div>
            <div className="flex flex-col gap-1 w-[75%] justify-center items-start">
              <label htmlFor="password" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Password:</label>
              <input className="px-2.5 py-2 w-full placeholder:text-black bg-slate-200 text-white rounded-xl"  placeholder="Enter password" type="password" value={data.password} onChange={(e) => setData({...data, password: e.target.value}) } name="" id="password" />
            </div>
            
            <button type="submit" className="text-3xl px-2.5 py-2 rounded-2xl w-[9rem] bg-slate-700  text-white">Sign In</button>
            <div>
            <p className="text-xl">Don&#39;t have an account? <Link className="underline underline-offset-4 text-blue-500" href={'/reg'}>Sign up now!</Link></p>
            </div>
            <div className="border w-full h-[12rem] flex flex-col gap-3">
                <button onClick={() => signIn('github')} className="text-3xl px-2.5 py-3 bg-black text-white ">Sign in with Github</button>
                <button onClick={() => signIn('google')} className="text-3xl px-2.5 py-3 bg-zinc-400 text-white ">Sign in with Google</button>
                <Link className="text-sm  underline underline-offset-4" href='/'>Home</Link>
            </div>
        </form>

        <div style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url("/teal.svg")'}} className="w-[50%] bg-cover bg-center h-screen bg-slate-300">

        </div>


    </div>
  )
}

