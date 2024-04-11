'use client'
import { useState, useRef } from "react";
import {signIn} from 'next-auth/react'
import {toast} from "react-hot-toast";

export default function Page() {

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
        </form>

    </div>
  )
}

