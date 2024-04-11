'use client'
import { useState, useRef } from "react";
import axios from "axios";
import {toast} from "react-hot-toast";

export default function Page() {

    const ref = useRef<HTMLFormElement>(null);

    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
})

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        ref.current?.reset()
        console.log(data);
        console.log('this is where i need to fetch the route handler to register someone to the monogdb database')
        axios.post('/api/register', data).then(() => toast.success('User has been registered successfully!!!!')).catch(() => toast.error('something went wrong!!'))

    }
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
        <h1>Create a Account</h1>

        <form  ref={ref} onSubmit={handleSubmit}>
            <input placeholder="Enter name" type="text" value={data.name} onChange={(e) => setData({...data, name: e.target.value}) } name="" id="name" />
            <input placeholder="example@mail.com"  type="email" value={data.email} onChange={(e) => setData({...data, email: e.target.value}) } name="" id="email" />
            <input placeholder="Enter password" type="password" value={data.password} onChange={(e) => setData({...data, password: e.target.value}) } name="" id="password" />
            <button type="submit" className="text-3xl px-2.5 py-2 bg-slate-700 text-white">Resigter!</button>
        </form>

    </div>
  )
}
