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
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { RootState } from '@/app/store';
import { setGrams } from '@/app/slices/logSlice';

export default function Infomation() {

  const {data: session} = useSession();

  const userCalories = Number(session?.user?.calories);
  console.log(session?.user?.calories)
  const dispatch = useDispatch();
  const grams = useSelector((state: RootState) => state?.log?.grams);

  const calculateMacros = (maintenanceCalories: any) => {
    const proteinCalories = maintenanceCalories * 0.3;
    const carbCalories = maintenanceCalories * 0.4;
    const fatCalories = maintenanceCalories * 0.3;
  
    const proteinGrams = proteinCalories / 4;
    const carbGrams = carbCalories / 4;
    const fatGrams = fatCalories / 9;
  
    return {
      proteinGrams,
      carbGrams,
      fatGrams
    };
  };
  

  useEffect(() => {
    
    if(session?.user?.calories !== undefined){ 
      const gram = calculateMacros(userCalories)
     dispatch(setGrams(gram))
    }
    
  }, [session?.user.calories])

 

  console.log(grams)

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
      <ProteinProgress  />
      <FatProgress />
     </div>

    </div>
  )
}
