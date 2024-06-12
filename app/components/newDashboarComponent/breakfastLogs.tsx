'use client';
import axios from "axios";
import { useDispatch , useSelector } from "react-redux";
import { setUserMealLogs } from "@/app/slices/logSlice";
import { RootState } from "@/app/store";

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
    fiber: number
}

export default function BreakfastLogs({name, carbs, calories, fat, protein, transFat, satFat, calcium, sodium, fiber}: BreakfastLogsProps) {

    const mealLogs = useSelector((state: RootState) => state.log.userMealLogs);
    console.log(mealLogs)

    const amounts = [Math.round(calories), `${protein}g`, `${carbs}g`, `${fat}g`, `${satFat}g`, `${transFat === null ?  0 : transFat} g`, `${fiber}g`, `${sodium}mg`, `${calcium}%`];

  return (
    <div className='w-full h-14 flex justify-start gap-5 items-center bg-slate-100'>
         <div className=' flex w-[31%] justify-between  items-center'>
            <h1 className="text-xl font-semibold w-full  p-2 tracking-wide">{name}</h1>
                </div>
                <div className='w-[67%]  flex justify-evenly items-center'>
                    {amounts.map((value, index) => (
                        <span key={index} className={`text-md text-indigo-400 hover:text-indigo-600 hover:cursor-pointer font-bold`}>{value}</span>
                    ))}
                </div>
    </div>
  )
}
