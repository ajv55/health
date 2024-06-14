'use client';
import axios from "axios";
import { useDispatch , useSelector } from "react-redux";
import { setOptionsModal, setUserMealLogs } from "@/app/slices/logSlice";
import { RootState } from "@/app/store";
import { SlOptionsVertical } from "react-icons/sl";
import { useState } from "react";
import OptionModal from "./optionModal";
import { AnimatePresence } from "framer-motion";

type BreakfastLogsProps = {
    name: string,
    carbs: number,
    calories: number,
    fat: number,
    protein: number,
    transFat: number | null,
    satFat: number | null,
    calcium: number,
    sodium: number,
    fiber: number,
    id: string
}

export default function BreakfastLogs({name, carbs, calories, fat, protein, transFat, satFat, calcium, sodium, fiber, id}: BreakfastLogsProps) {

    const mealLogs = useSelector((state: RootState) => state.log.userMealLogs);
    const optionsModal = useSelector((state: RootState) => state.log.optionsModal);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    console.log(mealLogs)

    const amounts = [Math.round(calories), `${protein}`, `${carbs}`, `${fat}`, `${satFat}`, `${transFat === null ?  0 : transFat}`, `${fiber}`, `${sodium}`, `${calcium}`];

  return (
    <div className='w-full group hover:bg-indigo-300 hover:bg-opacity-45 hover:text-indigo-600 hover:cursor-pointer h-14 flex justify-start gap-5 items-center bg-slate-100'>
         <div className=' flex  w-[32%] justify-between  items-center'>
             <h1 className="text-xl font-medium w-full  p-2 tracking-wide">{name}</h1>
            <div className="w-10 relative h-9 flex justify-center rounded-full items-center hover:bg-gray-400 hover:bg-opacity-45">
               <SlOptionsVertical onClick={() => setIsOpen(true)} size={20}  />
               <AnimatePresence>{isOpen && <OptionModal onClose={() => setIsOpen(false)}  id={id} />}</AnimatePresence>
            </div>
            
        </div>
            <div className='w-[66%] mr-2  flex justify-evenly items-center'>
                {amounts.map((value, index) => (
                    <span key={index} className={`text-md   w-32 flex justify-center items-center text-indigo-400 hover:text-indigo-600 hover:cursor-pointer font-bold`}>{value}</span>
                ))}
            </div>
    </div>
  )
}
