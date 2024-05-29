'use client'
import { useState, useRef, useEffect } from "react";
import {signIn, useSession} from 'next-auth/react'
import {toast} from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";

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
    <div className='w-full relative  h-screen flex flex-col lg:flex-row justify-centers items-center'>
        

        <motion.form variants={{hidden: {y: '-100vh', opacity: 0}, visible: {y: 0, opacity: 1}}} initial='hidden' animate='visible' transition={{duration: 1, type: 'spring', stiffness: 80}} className=" bg-gradient-to-tr from-teal-300 via-teal-600 to-teal-200 lg:w-[50%] w-[97%] lg:rounded-none rounded-2xl mt-10 lg:mt-0 lg:h-screen h-content p-3 flex flex-col justify-bewteen items-center gap-5  drop-shadow-sm"  ref={ref} onSubmit={handleSubmit}>
        <h1 className="lg:text-7xl text-5xl text-white  tracking-widest">Sign In</h1>
            <div className="flex flex-col mt-3 gap-1 lg:w-[75%] w-[85%] justify-center items-start">
              <label htmlFor="email" className="block mb-2 lg:text-3xl text-xl font-medium text-gray-200 dark:text-white">Email:</label>
               <input className="px-2.5 py-2 w-full placeholder:text-black bg-slate-100 lg:text-2xl text-lg rounded-xl"  placeholder="example@mail.com"  type="email" value={data.email} onChange={(e) => setData({...data, email: e.target.value}) } name="" id="email" />
            </div>
            <div className="flex flex-col gap-1 mt-4 lg:w-[75%] w-[85%] justify-center items-start">
              <label htmlFor="password" className="block mb-2 lg:text-3xl text-xl font-medium text-gray-200 dark:text-white">Password:</label>
              <input className="px-2.5 py-2  w-full placeholder:text-black bg-slate-100 lg:text-2xl text-lg rounded-xl"  placeholder="Enter password" type="password" value={data.password} onChange={(e) => setData({...data, password: e.target.value}) } name="" id="password" />
            </div>
            
            <button type="submit" className="lg:text-3xl text-xl px-2.5 py-2 rounded-2xl w-[9rem] bg-gradient-to-br from-cyan-200 via-cyan-800 to-cyan-300 hover:bg-gradient-to-tr hover:from-cyan-300 hover:via-cyan-900 hover:to-cyan-400 mt-3  text-white">Sign In</button>
            <div>
            <p className="text-xl text-white tracking-wide">Don&#39;t have an account? <Link className="underline underline-offset-4 lg:text-2xl text-lg text-sky-200" href={'/reg'}>Sign up now!</Link></p>
            </div>
            <div className=" w-full lg:h-[15rem] h-[8rem] flex flex-col justify-end items-start lg:gap-4 lg:mt-0 mt-3 gap-3">
                <button onClick={() => signIn('github')} className="lg:text-2xl text-lg self-center rounded-xl flex justify-center items-center gap-4 lg:w-[55%] w-[75%] px-2.5 py-3 bg-black hover:bg-gradient-to-tr hover:from-zinc-500 hover:via-zinc-300 hover:to-zinc-500  hover:text-black text-white "><FaGithub size={30} color="white"/>Sign in with Github</button>
                <button onClick={() => signIn('google')} className="lg:text-2xl text-lg  self-center rounded-xl lg:w-[55%] w-[75%] flex justify-center items-center gap-4 px-2.5 py-3 bg-zinc-100 hover:bg-gradient-to-tr hover:from-zinc-700 hover:via-zinc-950 hover:to-zinc-700 hover:text-zinc-200 text-zinc-800 "><FcGoogle size={30}/> Sign in with Google</button>
                <div className="w-full flex justify-center gap-5 items-center">
                  <h5 className="text-sm lg:text-lg text-white font-ligh tracking-wide">Email: test@test.com</h5>
                  <h5 className="text-sm lg:text-lg text-white font-ligh tracking-wide">Password: 123123</h5>
                </div>
            </div>

            <div className=" md:mt-28 lg:mt-0 w-full  h-[4rem] flex justify-start items-end">
               <Link className="text-lg text-white hover:text-2xl hover:text-orange-600  w-[4rem] underline underline-offset-4" href='/'>Home</Link>
            </div>

        </motion.form>

        <div style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url("/teal.svg")'}} className="lg:w-[50%] absolute -z-10 lg:relative w-full bg-cover bg-center lg:h-screen h-[36rem] ">
           
        </div>


    </div>
  )
}

