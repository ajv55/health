'use client';
import { FormEvent, useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function WeightInput({value, onChange}: { value: string, onChange: any}) {
    const [isTrue, setIsTrue] = useState<boolean>(false)
  return (
    <div className="flex relative flex-col justify-start items-start gap-2">
        <label  className="flex justify-center items-center gap-2 text-xl font-bold tracking-wider text-white" htmlFor="weight">Weight <IoIosInformationCircleOutline   onMouseMove={() => setIsTrue(true)} size={28} /></label>
        <input className="px-2.5 py-2 w-full rounded-md placeholder:text-black placeholder:text-lg  focus:ring-blue-400 focus:ring-4 outline-none" placeholder="Enter weight " type="text" value={value} onChange={onChange} name="" id="weight" />
        {isTrue && <p onMouseLeave={() => setIsTrue(false)} className=" absolute top-0 -right-20 w-[80%] h-[6rem] flex justify-center items-center bg-slate-100 text-lg text-center rounded-2xl">Weight needs to be in kg.</p>}
        
    </div>
  )
}
