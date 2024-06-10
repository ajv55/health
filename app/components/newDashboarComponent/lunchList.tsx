'use client';
import { setIsFocused } from '@/app/slices/logSlice';
import { RootState } from '@/app/store';
import React, { useRef, useEffect, useState } from 'react'
import { FaPencilAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';


export default function LunchList() {

    const lunchModal = useSelector((state: RootState) => state.log.lunchModal);
    const [focused, setFocused] = useState<boolean>(false)
    const dispatch = useDispatch();

    const ref = useRef<HTMLInputElement>(null);

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        setFocused(true)
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        setFocused(false)
    };

    useEffect(() => {
        if(lunchModal === true){ 
            ref.current?.focus()
        }
    }, [])

  return (
    <div className='w-full h-20 flex justify-start items-center bg-slate-100'>
        <div className='flex w-[30%] justify-center gap-3 p-1 items-center'>
           <FaPencilAlt className='text-indigo-500 mt-3' size={20} />
           <div className="relative z-0 w-full group">
                <input onFocus={handleFocus} onBlur={handleBlur} ref={ref} type="text" name="breakfast" id="breakfast" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer" placeholder=" " required />
                <label htmlFor="breakfast" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Please enter a food name</label>
            </div>
        </div>
        {focused && (
                <div className=" p-1 flex justify-start items-center gap-6 ">
                    <button className="bg-indigo-200 text-indigo-500 p-1 rounded-md">Search</button>
                    <button className="bg-indigo-200 text-indigo-500  p-1 rounded-md ">Cancel</button>
                </div>
            )}
    </div>
  )
}
