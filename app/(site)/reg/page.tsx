'use client'
import { useState, useRef } from "react";
import axios from "axios";
import {toast} from "react-hot-toast";
import { useRouter } from "next/navigation";
import BottomTilt from "@/app/components/bottomTilt";
import WeightInput from "@/app/components/input";
import HeightInput from "@/app/components/heightInput";
import {useSession} from 'next-auth/react'


export default function Page() {
    const { data: session, status} = useSession()

    const ref = useRef<HTMLFormElement>(null);
    const router = useRouter();

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        weightInKg: '',
        age: '',
        heightInInches: '',
        gender: ''
})


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        ref.current?.reset()
        console.log('this is where i should be calling this function only after someone has succesfully logged in, this function will calculate there calories and update it on the database')
        axios.post('/api/register', data).then(() => toast.success('User has been registered successfully!!!!')).then(() => router.push('/login')).catch(() => toast.error('something went wrong!!'))

    }
    console.log(data)

  return (
    <div style={{backgroundImage: 'linear-gradient(to left, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("/registerpage.jpg")'}} className='w-full relative  h-screen bg-cover bg-center flex flex-col justify-center items-center gap-16'>
          <BottomTilt  />
       
        <h1 className="text-white text-7xl font-bold tracking-wide">Sign Up</h1>

        <form className="bg-slate-700 rounded-xl  z-10 w-[43%] h-[32rem] p-4 flex  flex-wrap justify-center items-center gap-4" ref={ref} onSubmit={handleSubmit}>
            <div className="flex  w-[48%] flex-col justify-start items-start gap-2">
                <label className="text-xl font-bold tracking-wider text-white" htmlFor="name">Name</label>
               <input className="px-2.5 py-2 w-full rounded-md placeholder:text-black placeholder:text-lg  focus:ring-blue-400 focus:ring-4 outline-none" placeholder="Enter name" type="text" value={data.name} onChange={(e) => setData({...data, name: e.target.value}) } name="" id="name" />
            </div>
            <div className="flex  w-[48%] flex-col justify-start items-start gap-2">
                <label className="text-xl font-bold tracking-wider text-white" htmlFor="passowrd">Password</label>
                <input className="px-2.5 py-2 w-full rounded-md placeholder:text-black placeholder:text-lg  focus:ring-blue-400 focus:ring-4 outline-none" placeholder="Enter password" type="password" value={data.password} onChange={(e) => setData({...data, password: e.target.value}) } name="" id="password" />
            </div>
            <div className="flex w-[57%] flex-col justify-start items-start gap-2">
                <label className="text-xl font-bold tracking-wider text-white" htmlFor="email">Email</label>
                <input className="px-2.5 py-2 w-full rounded-md placeholder:text-black placeholder:text-lg  focus:ring-blue-400 focus:ring-4 outline-none" placeholder="example@mail.com"  type="email" value={data.email} onChange={(e) => setData({...data, email: e.target.value}) } name="" id="email" />
            </div>

           <div className=" w-[15%] h-[75px] flex flex-col justify-center gap-2 items-start">
               <label className="text-white text-xl font-bold tracking-wider" htmlFor="gender">Gender</label>
               <select  value={data.gender} onChange={(e) => setData({...data, gender: e.target.value})} className="w-full px-2.5 py-2 rounded-2xl outline-none text-xl" name="" id="gender">
                   <option disabled value="">Choose an gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
           </div>

            
            <div className="flex  flex-col justify-start items-start gap-2">
                <label className="text-xl font-bold tracking-wider text-white" htmlFor="age">Age</label>
                <input className="px-2.5 py-2 w-full rounded-md placeholder:text-black placeholder:text-lg  focus:ring-blue-400 focus:ring-4 outline-none" placeholder="Enter age" type="text" value={data.age} onChange={(e) => setData({...data, age: e.target.value}) } name="" id="age" />
            </div>
            
            <WeightInput value={data.weightInKg} onChange={(e: any) => setData({...data, weightInKg: e.target.value})}/>
            <HeightInput value={data.heightInInches} onChange={(e: any) => setData({...data, heightInInches: e.target.value })}/>
            
            
            <button type="submit" className="text-3xl border w-full px-2.5 py-2 bg-slate-700 text-white">Resigter!</button>
        </form>

    </div>
  )
}
