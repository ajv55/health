'use client'; 
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";

export default function Lunch() {

    const nutrition = useSelector((state: RootState) => state.nutrition.nutritionList);
    const list = Object.entries(nutrition)
    console.log(list[0])

  return (
    <div className='bg-slate-900 w-full h-[32rem]'>

    </div>
  )
}
