'use client'
import { useState, useRef, useEffect } from "react";
import {signIn, useSession} from 'next-auth/react'
import {toast} from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Page() {
    const session = useSession();
    const router = useRouter();

    const ref = useRef<HTMLFormElement>(null);

    const [data, setData] = useState({
        email: '',
        password: ''
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
                router.push('/dashboard')
                toast.success('you have successfully logged in')
            }
        })
    }
  return (
    <div className='w-full  h-screen flex justify-centers items-center'>
        

        <form className=" bg-gradient-to-tr from-teal-300 via-teal-600 to-teal-200 w-[50%] h-screen p-3 flex flex-col justify-bewteen items-center gap-5  drop-shadow-sm"  ref={ref} onSubmit={handleSubmit}>
        <h1 className="text-7xl text-white  tracking-widest">Sign In</h1>
            <div className="flex flex-col mt-3 gap-1 w-[75%] justify-center items-start">
              <label htmlFor="email" className="block mb-2 text-3xl font-medium text-gray-900 dark:text-white">Email:</label>
               <input className="px-2.5 py-2 w-full placeholder:text-black bg-slate-300 text-2xl rounded-xl"  placeholder="example@mail.com"  type="email" value={data.email} onChange={(e) => setData({...data, email: e.target.value}) } name="" id="email" />
            </div>
            <div className="flex flex-col gap-1 mt-4 w-[75%] justify-center items-start">
              <label htmlFor="password" className="block mb-2 text-3xl font-medium text-gray-900 dark:text-white">Password:</label>
              <input className="px-2.5 py-2  w-full placeholder:text-black bg-slate-200 text-2xl rounded-xl"  placeholder="Enter password" type="password" value={data.password} onChange={(e) => setData({...data, password: e.target.value}) } name="" id="password" />
            </div>
            
            <button type="submit" className="text-3xl px-2.5 py-2 rounded-2xl w-[9rem] bg-gradient-to-br from-cyan-200 via-cyan-800 to-cyan-300 hover:bg-gradient-to-tr hover:from-cyan-300 hover:via-cyan-900 hover:to-cyan-400 mt-3  text-white">Sign In</button>
            <div>
            <p className="text-xl text-white tracking-wide">Don&#39;t have an account? <Link className="underline underline-offset-4 text-2xl text-sky-200" href={'/reg'}>Sign up now!</Link></p>
            </div>
            <div className=" w-full h-[15rem] flex flex-col justify-end items-start gap-8">
                <button onClick={() => signIn('github')} className="text-3xl self-center rounded-xl flex justify-center items-center gap-4 w-[55%] px-2.5 py-3 bg-black hover:bg-gradient-to-tr hover:from-zinc-500 hover:via-zinc-300 hover:to-zinc-500  hover:text-black text-white "><FaGithub size={30} color="white"/>Sign in with Github</button>
                <button onClick={() => signIn('google')} className="text-3xl self-center rounded-xl w-[55%] flex justify-center items-center gap-4 px-2.5 py-3 bg-zinc-100 hover:bg-gradient-to-tr hover:from-zinc-700 hover:via-zinc-950 hover:to-zinc-700 hover:text-zinc-200 text-zinc-800 "><FcGoogle size={30}/> Sign in with Google</button>
            </div>
            <div className=" md:mt-28 lg:mt-0 w-full  h-[4rem] flex justify-start items-end">
               <Link className="text-lg  hover:text-2xl hover:text-orange-600  w-[4rem] underline underline-offset-4" href='/'>Home</Link>
            </div>

        </form>

        <div style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url("/teal.svg")'}} className="w-[50%] bg-cover bg-center h-screen bg-slate-300">
           
        </div>


    </div>
  )
}

