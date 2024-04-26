import { MdOutlineFreeBreakfast } from "react-icons/md";
import { MdOutlineDinnerDining } from "react-icons/md";
import { MdOutlineLunchDining } from "react-icons/md";
import { LuTrash } from "react-icons/lu";

type MealCardProps = {
    meal?: string, 
    food?: string,
    cal?: number
}

export default function MealCard({meal, food, cal}: MealCardProps) {
  return (
    <div className='w-[40%]  h-[19rem] bg-slate-200 border drop-shadow-xl flex flex-col justify-evenly items-center'>
        <div className="w-full flex justify-end items-center p-2">
            <LuTrash size={25} />
        </div>
        <h1 className="text-lg font-light tracking-wide">{meal}</h1>
        {meal === 'Breakfast' && <MdOutlineFreeBreakfast size={35} />}
        {meal === 'Lunch' && <MdOutlineDinnerDining size={35} />}
        {meal === 'Dinner' && <MdOutlineLunchDining size={35} />}
        <div className="w-full flex justify-between items-center p-2">
            <h4 className="font-bold text-md tracking-wide">{food}</h4>
            <span className="text-zinc-400 font-light tracking-wide">{cal}</span>
        </div>
    </div>
  )
}
