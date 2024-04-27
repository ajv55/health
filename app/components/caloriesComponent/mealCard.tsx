import { MdOutlineFreeBreakfast } from "react-icons/md";
import { MdOutlineDinnerDining } from "react-icons/md";
import { MdOutlineLunchDining } from "react-icons/md";
import { LuTrash } from "react-icons/lu";
import {format} from 'date-fns'

type MealCardProps = {
    meal?: string, 
    food?: string,
    cal?: number,
    onDelete?: () => void,
    date?: Date 
}

export default function MealCard({meal, food, cal, onDelete, date}: MealCardProps) {

    const dateOfMeal = format(new Date(date!), 'MMM dd, yyyy')


  return (
    <div className='w-[45%]  h-[19rem] bg-slate-200  shadow-md shadow-zinc-800 drop-shadow-xl flex flex-col justify-evenly items-center'>
        <div className="w-full flex justify-between items-center p-2">
            <h1 className="text-md font-light text-zinc-600 tracking-wide">{dateOfMeal}</h1>
            <LuTrash onClick={onDelete} className=" cursor-pointer" size={25} />
        </div>
        <h1 className="text-2xl font-light tracking-wide">{meal}</h1>
        {meal === 'Breakfast' && <MdOutlineFreeBreakfast size={60} />}
        {meal === 'Lunch' && <MdOutlineDinnerDining size={60} />}
        {meal === 'Dinner' && <MdOutlineLunchDining size={60} />}
        <div className="w-full flex justify-between items-center p-3">
            <h4 className="font-bold text-xl tracking-wide">{food}</h4>
            <span className="text-zinc-400 font-light text-xl tracking-wide">{cal}</span>
        </div>
    </div>
  )
}
