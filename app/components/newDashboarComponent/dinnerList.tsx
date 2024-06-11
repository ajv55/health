'use client';
import { setIsFocused } from '@/app/slices/logSlice';
import { RootState } from '@/app/store';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'
import { FaPencilAlt } from 'react-icons/fa'
import { IoCaretDownOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';


export default function DinnerList() {

    const dinnerModal = useSelector((state: RootState) => state.log.dinnerModal);
    const [focused, setFocused] = useState<boolean>(false);
    const [showDropdown, setShowDropdown] = useState<boolean>(false);


    const ref = useRef<HTMLInputElement>(null);

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        setFocused(true);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        setFocused(false)
    };

    useEffect(() => {
        if(dinnerModal === true){ 
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
        <AnimatePresence>
                {(focused || showDropdown) && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="p-1 flex justify-evenly items-center gap-6  mt-1 w-full"
                    >
                        {/* search button will take user to another page within the calories route to show the user a page for them to search up different foods from the database */}
                        <button className="hover:bg-indigo-200 hover:text-indigo-800 text-indigo-500 px-3 py-2 rounded-md">Search</button>
                        {/* same button will be used to log the same 2 breakfast foods as yesterday so make an api call to grab yesterday either last two breakfast items or first two breakfast items   */}
                        <button className="hover:bg-indigo-200 hover:text-indigo-800 text-indigo-500 px-3 py-2 rounded-md">Same</button>
                        {/* Recent button wiil be used to send the user to a page dedicated to show them there recent meals which  we will make an api call or endpoint to grab all of the user breakfast items and showcase the items to them on that page. we will go from most up to date items first and decsend from there */}
                        <button className="hover:bg-indigo-200 hover:text-indigo-800 text-indigo-500 px-3 py-2 rounded-md">Recent</button>
                        {/* my food button will first have a modal pop up and the modal will have links to the search page where their favorite foods, recent foods, and frequent foods */}
                        <button className="hover:bg-indigo-200 hover:text-indigo-800 flex justify-center items-center gap-1 text-indigo-500 px-3 py-2 rounded-md">My Foods<IoCaretDownOutline size={12} className="text-indigo-500" /></button>

                        <button className="hover:bg-indigo-200 hover:text-indigo-800 text-indigo-500 px-3 py-2 rounded-md">Cancel</button>
                    </motion.div>
                )}
            </AnimatePresence>
    </div>
  )
}
