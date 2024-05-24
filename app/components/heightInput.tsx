'use client';
import { FormEvent, useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function HeightInput({value, onChange}: { value: string, onChange: any}) {
    const [isTrue, setIsTrue] = useState<boolean>(false)
  return (
    <div className="flex lg:w-[25%] w-[43%] relative flex-col justify-start items-start gap-2">
        <label  className="flex justify-center items-center gap-2 lg:text-xl text-lg font-bold tracking-wider text-zinc-800" htmlFor="height">Height <IoIosInformationCircleOutline className="lg:w-6 lg:h-6"  onMouseMove={() => setIsTrue(true)} size={18} /></label>
        <input className="px-2.5 py-2 w-full border-b-2 border-r-2 drop-shadow-lg border-zinc-800 rounded-md placeholder:text-zinc-400 lg:placeholder:text-xl placeholder:text-lg text-xl  focus:outline-none outline-none" placeholder="Enter weight " type="text" value={value} onChange={onChange} name="" id="height" />
        {isTrue && <p onMouseLeave={() => setIsTrue(false)} className=" absolute z-20 top-0 -right-20 w-[80%] h-[6rem] flex justify-center items-center bg-slate-100 text-lg text-center rounded-2xl">Height must be in inches.</p>}
        
    </div>
  )
}
