'use client';
import axios from "axios";
import { useDispatch , useSelector } from "react-redux";
import { setOptionsModal, setUserMealLogs } from "@/app/slices/logSlice";
import { RootState } from "@/app/store";
import { SlOptionsVertical } from "react-icons/sl";
import { useState } from "react";
import OptionModal from "./optionModal";
import { AnimatePresence } from "framer-motion";
import LunchOptionsModal from "./lunchOptionsModal";

type BreakfastLogsProps = {
    name?: string,
    carbs?: number,
    calories?: number,
    fat?: number,
    protein?: number,
    transFat?: number | null,
    satFat?: number | null,
    calcium?: number,
    sodium?: number,
    fiber?: number,
    id?: string
}

export default function LunchLog({name, carbs, calories, fat, protein, transFat, satFat, calcium, sodium, fiber, id}: BreakfastLogsProps) {

    const lunchLogs = useSelector((state: RootState) => state.log.userLunchLogs);
    const optionsModal = useSelector((state: RootState) => state.log.optionsModal);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    console.log(lunchLogs)

    const amounts = [Math.round(calories!), `${protein}`, `${carbs}`, `${fat}`, `${satFat}`, `${transFat === null ?  0 : transFat}`, `${fiber}`, `${sodium}`, `${calcium || 0}`];

  return (
    <div className='w-full group hover:bg-indigo-300 hover:bg-opacity-45 hover:text-indigo-600 hover:cursor-pointer lg:h-14 h-16 flex lg:flex-row flex-col-reverse justify-start gap-5 items-center bg-slate-100'>
         <div className=' flex  lg:w-[32%] w-[65%] justify-between  items-center'>
             <h1 className="text-lg sm:text-xl font-medium w-full  p-2 tracking-wide">{name}</h1>
            <div className="w-10 relative h-9 flex justify-center rounded-full items-center hover:bg-gray-400 hover:bg-opacity-45">
               <SlOptionsVertical onClick={() => setIsOpen(true)} size={20}  />
               <AnimatePresence>{isOpen && <LunchOptionsModal onClose={() => setIsOpen(false)}  id={id!} />}</AnimatePresence>
            </div>
            
        </div>
            <div className='lg:w-[66%] w-full  mr-2 lg:flex hidden justify-evenly items-center'>
                {amounts.map((value, index) => (
                    <span key={index} className={`text-xs sm:text-lg   w-32 flex justify-center items-center  text-indigo-400 hover:text-indigo-600 hover:cursor-pointer font-bold`}>{value}</span>
                ))}
            </div>
    </div>
  )
}
