'use client'
import { useState, useRef } from "react";
import axios from "axios";
import {toast} from "react-hot-toast";
import { useRouter } from "next/navigation";
import BottomTilt from "@/app/components/bottomTilt";
import WeightInput from "@/app/components/input";
import HeightInput from "@/app/components/heightInput";
import {useSession} from 'next-auth/react'
import Link from "next/link";
import { motion } from "framer-motion";


export default function Page() {
    const { data: session, status} = useSession()

    const ref = useRef<HTMLFormElement>(null);
    const router = useRouter();

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        weightInLbs: '',
        age: '',
        heightInInches: '',
        gender: '',
        agree: '',
        TDEE: '',
        goal: '',
})


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        ref.current?.reset()
        console.log('this is where i should be calling this function only after someone has succesfully logged in, this function will calculate there calories and update it on the database')
        axios.post('/api/register', data).then(() => toast.success('User has been registered successfully!!!!')).then(() => router.push('/login')).catch((error) => console.error('error occurred when trying to register', error))
        };

    console.log(data)

  return (
    <div  className='w-full  lg:h-screen h-content bg-cover bg-center flex lg:flex-row flex-col relative justify-start items-center '>

        <div style={{backgroundImage: 'linear-gradient(to left, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("/registerpage.jpg")'}} className="lg:w-[87%] w-full absolute lg:h-screen h-[64rem] lg:right-0 bg-cover bg-center flex  justify-end items-center">
            <div className="w-[54%] hidden  lg:flex flex-col justify-between items-start p-1 h-screen">
               <h2 className="text-6xl  text-white text-center  font-bold tracking-wide">Unlock Your <span className="font-extrabold text-7xl bg-gradient-to-tl from-stone-200 via-orange-600 to-red-900 bg-clip-text text-transparent">Fitness Potential</span> and Join the FitGenius Community Today!</h2>
               <p className="text-2xl text-white text-center tracking-wide">Ready to embark on an <span className="font-bold text-3xl bg-gradient-to-tr from-red-300 via-amber-200 to-red-600 bg-clip-text text-transparent">exhilarating journey</span> to a fitter, healthier you? Join thousands of like-minded individuals who are <span className="text-4xl font-extrabold bg-gradient-to-tl from-orange-700 via-amber-300 to-stone-400 bg-clip-text text-transparent">transforming their lives</span> with FitGenius. With <span className="font-extrabold text-3xl bg-gradient-to-bl from-teal-700 via-teal-200 to-teal-400 bg-clip-text text-transparent">personalized</span> workout plans, expert <span className="font-extrabold text-3xl bg-gradient-to-bl from-emerald-800 via-emerald-200 to-teal-700 bg-clip-text text-transparent">nutrition </span> guidance, and a supportive community by your side, reaching your fitness goals has never <span className="font-extrabold text-3xl bg-gradient-to-br from-amber-700 via-amber-200 to-purple-400 bg-clip-text text-transparent">been more exciting</span>. Don&#39;t miss out &#45; <span className="underline underline-offset-4 text-3xl text-white" >Sign Up Now!</span> and let&#39;s make fitness fun <span className="font-bold text-3xl">!</span></p>
               <div className="w-full p-2  h-[3rem] flex justify-end items-end">
                  <Link className="hover:underline hover:underline-offset-8 text-2xl text-white tracking-widest" href='/'>Home</Link>
               </div>
            </div>
            <Link className="text-white font-light self-start  text-lg p-2 " href='/'>Home</Link>
        </div>

        <motion.form variants={{hidden: {y: '-100vh', opacity: 0}, visible: {y: 0, opacity: 1}}} initial='hidden' animate='visible' transition={{duration: 1, type: 'spring', stiffness: 80 }} className=" lg:rounded-r-2xl rounded-2xl mt-10 lg:mt-0 bg-white z-10 lg:w-[53%] w-[97%] drop-shadow-2xl lg:h-screen h-content p-4 flex  flex-wrap justify-center items-center gap-6" ref={ref} onSubmit={handleSubmit}>
        <h1 className=" bg-gradient-to-tr from-emerald-800 p-2 via-orange-500 to-emerald-50 bg-clip-text text-transparent text-7xl w-full text-center font-bold tracking-wide">Sign Up</h1>
            <div className="flex  lg:w-[48%] w-full flex-col justify-start items-start gap-2">
                <label className="lg:text-2xl text-lg font-bold tracking-wider text-zinc-800" htmlFor="name">Username</label>
               <input className="px-2.5 py-2 border-b-2 border-r-2 drop-shadow-lg border-zinc-800 w-full text-2xl  rounded-md placeholder:text-zinc-400 lg:placeholder:text-2xl placeholder:text-lg focus:outline-none outline-none" placeholder="Enter name" type="text" value={data.name} onChange={(e) => setData({...data, name: e.target.value}) } name="" id="name" />
            </div>
            <div className="flex  lg:w-[48%] w-full flex-col justify-start items-start gap-2">
                <label className="lg:text-2xl text-lg font-bold tracking-wider text-zinc-800" htmlFor="passowrd">Password</label>
                <input className="px-2.5 border-b-2 border-r-2 drop-shadow-lg border-zinc-800 text-2xl py-2 w-full rounded-md placeholder:text-zinc-400 focus:outline-none lg:placeholder:text-2xl placeholder:text-lg  outline-none" placeholder="Enter password" type="password" value={data.password} onChange={(e) => setData({...data, password: e.target.value}) } name="" id="password" />
            </div>
            <div className="flex lg:w-[85%] w-full flex-col justify-start items-start gap-2">
                <label className="lg:text-2xl text-lg font-bold tracking-wider text-zinc-800" htmlFor="email">Email</label>
                <input className="px-2.5 py-2 text-2xl border-b-2 border-r-2 drop-shadow-lg border-zinc-800 w-full rounded-md placeholder:text-zinc-400 lg:placeholder:text-2xl placeholder:text-lg   focus:outline-none outline-none" placeholder="example@mail.com"  type="email" value={data.email} onChange={(e) => setData({...data, email: e.target.value}) } name="" id="email" />
            </div>

           <div className=" lg:w-[38%] w-[43%]  flex flex-col justify-center gap-2 items-start">
               <label className="text-zinc-800  lg:text-2xl text-lg font-bold tracking-wider" htmlFor="gender">Gender</label>
               <select  value={data.gender} onChange={(e) => setData({...data, gender: e.target.value})} className="w-full px-2.5 py-2 text-zinc-800 placeholder:text-zinc-400 border-b-2 border-r-2 drop-shadow-2xl border-zinc-800  rounded-md outline-none  lg:text-2xl text-lg" name="" id="gender">
                   <option disabled value="">Choose an gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
           </div>

            
            <div className="flex lg:w-[45%] w-[43%] flex-col justify-start items-start gap-2">
                <label className="lg:text-2xl text-lg font-bold tracking-wider text-zinc-800" htmlFor="age">Age</label>
                <input className="px-2.5 py-2 border-b-2 border-r-2 drop-shadow-lg border-zinc-800 w-full rounded-md placeholder:text-zinc-400 lg:placeholder:text-2xl placeholder:text-lg   text-xl outline-none" placeholder="Enter age" type="text" value={data.age} onChange={(e) => setData({...data, age: e.target.value}) } name="" id="age" />
            </div>
            
            <WeightInput value={data.weightInLbs} onChange={(e: any) => setData({...data, weightInLbs: e.target.value})}/>
            <HeightInput value={data.heightInInches} onChange={(e: any) => setData({...data, heightInInches: e.target.value })}/>

            <div className=" flex justify-evenly items-center">
                <div className=" w-[45%] h-[3rem] flex flex-col justify-start items-start gap-2">
                    <label className="text-zinc-800  lg:text-xl text-lg font-bold tracking-wider" htmlFor="activity">Physical Activity</label>
                    <select value={data.TDEE} className="w-full px-2.5 py-2 text-zinc-800  border-b-2 border-r-2 drop-shadow-md border-zinc-800  rounded-md outline-none  lg:text-2xl text-lg" onChange={(e) => setData({...data, TDEE: e.target.value})} name="activity" id="activity">
                        <option disabled value="">Activity</option>
                        <option value="No-Exercise">Little to no exercise and work a desk job</option>
                        <option value="Light-Exercise">Light exercise 1-3 days per week</option>
                        <option value="Moderate-Exercise">Moderate exercise 3-5 days per week</option>
                        <option value="Heavy-Exercise">Heavy exercise 6-7 days per week</option>
                        <option value="Strenuous-Exercise">Strenuous training 2 times a day</option>
                    </select>
                </div>

                <div className=" w-[45%] h-[3rem] flex flex-col justify-start items-start gap-1">
                    <label className="lg:text-xl text-lg font-bold tracking-wider text-zinc-800" htmlFor="goal">Goal Weight</label>
                    <input className="px-2.5 py-2 border-b-2 border-r-2 drop-shadow-lg border-zinc-800 w-full text-2xl  rounded-md placeholder:text-zinc-400 lg:placeholder:text-2xl placeholder:text-lg focus:outline-none outline-none" placeholder="Your goal weight..." type="text" value={data.goal} onChange={(e) => setData({...data, goal: e.target.value}) } name="" id="goal" />  
                </div>
            </div>


            <div className="flex flex-col justify-center items-start mt-7 gap-2 ">
              <div className="flex justify-center items-center gap-2">
                <input className="border w-4 h-4 cursor-pointer " value={data.agree} checked={data.agree === 'agreed'} onChange={(e) => setData({...data, agree: 'agreed'})} name="terms" id="terms" type="radio"  />
                <label className="lg:text-xl text-sm" htmlFor="terms">I agree to the <span className="font-bold underline underline-offset-4 text-blue-600 cursor-pointer"> Terms of Service</span>  and  <span className="font-bold underline underline-offset-4 text-blue-600 cursor-pointer"> Privacy Policy</span>.</label>
               
              </div>
              <p className="text-center lg:text-lg text-md tracking-wide">Already have an account? <Link href='/login' className="font-bold text-lg underline underline-offset-4 cursor-pointer text-blue-600">Sign In</Link></p>
            </div>
            
            
            
            <button type="submit" className="lg:text-3xl text-2xl bg-gradient-to-br from-orange-900 via-orange-500 to-orange-500 hover:bg-gradient-to-tl hover:from-emerald-800 hover:via-teal-500 hover:to-teal-200   w-[75%] rounded-2xl px-2 py-3 bg-slate-700 text-white tracking-widest drop-shadow-xl">Create Account</button>
        </motion.form>

    </div>
  )
}
