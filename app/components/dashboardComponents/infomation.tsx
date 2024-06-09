'use client';
import { useSession } from 'next-auth/react';
import { SlOptionsVertical } from "react-icons/sl";
import Main from '../newDashboarComponent/main';
import { GiFootsteps } from "react-icons/gi";
import { IoWater } from "react-icons/io5";
import Personal from '../newDashboarComponent/personal';
import ProgressBar from '../newDashboarComponent/progressBar';
import MealGroup from '../newDashboarComponent/mealGroup';
import CarbProgress from '../newDashboarComponent/carbProgress';
import ProteinProgress from '../newDashboarComponent/proteinProgress';
import FatProgress from '../newDashboarComponent/fatProgress';

export default function Infomation() {

  const {data: session} = useSession();

  const userCalories = session?.user.calories;

  return (
    <div className='w-[56%] h-[30rem] flex flex-col justify-start items-center rounded-lg bg-white'>
      <Main />

     {/* here will go the execise, water, steps tracking */}
     <div className='w-full flex justify-evenly items-center  h-[18rem] '>
       <Personal />

       <div className='w-[40%]  h-full'>
        <ProgressBar />
      </div>

      <div className='w-[25%]  h-full'>
        <MealGroup />
      </div>
     </div>
     {/* here will go the carb fats and protein progress bars */}
     <div className='w-full flex justify-evenly items-center h-[8rem]'>
      <CarbProgress />
      <ProteinProgress />
      <FatProgress />
     </div>

    </div>
  )
}
