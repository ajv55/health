'use client';
import React, { useEffect, useRef, useState } from 'react'
import CaloriesHeader from '@/app/components/caloriesComponent/caloriesHeader'
import CaloriesLine from '@/app/components/caloriesComponent/caloriesLine'
import { IoSearchOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { TbChefHat } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Breakfast from '@/app/components/newDashboarComponent/breakfast';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { setBreakfastModal, setDinnerModal, setLunchModal, setSnackModal } from '@/app/slices/logSlice';
import Lunch from '@/app/components/newDashboarComponent/lunch';
import Dinner from '@/app/components/newDashboarComponent/dinner';
import Snack from '@/app/components/newDashboarComponent/snack';
import BreakfastList from '@/app/components/newDashboarComponent/breakfastList';
import LunchList from '@/app/components/newDashboarComponent/lunchList';
import DinnerList from '@/app/components/newDashboarComponent/dinnerList';
import SnackList from '@/app/components/newDashboarComponent/snackList';
import { useSearchParams } from 'next/navigation';

interface FoucsedState {
  focusedInput?: 'breakfast' | 'lunch'
}

export default function Page() {

  
  const breakfastModal = useSelector((state: RootState) => state.log.breakfastModal);
  const lunchModal = useSelector((state: RootState) => state.log.lunchModal);
  const dinnerModal = useSelector((state: RootState) => state.log.dinnerModal);
  const snackModal = useSelector((state: RootState) => state.log.snackModal);
  const dispatch = useDispatch();


  const workoutsRef = useRef<HTMLInputElement>(null);

  

  const searchParams = useSearchParams();
  const meal = searchParams.get('meal');
  console.log(meal)

  useEffect(() => {
    if (meal) {
      switch (meal) {
        case 'breakfast':
          dispatch(setBreakfastModal(true))
          break;
        case 'lunch':
          dispatch(setLunchModal(true))
          break;
        case 'dinner':
          dispatch(setDinnerModal(true))
          break;
        case 'snacks':
          dispatch(setSnackModal(true))
          break;
        case 'workouts':
          workoutsRef.current?.focus();
          break;
        default:
          break;
      }
    }
  }, [meal]);


  const amounts = ["0", "0 g", "0 g", "0 g", "0 g", "0 g", "0 g", "0 g", "0 %"]

  return (
    <div className='w-full h-content flex flex-col justify-start items-center gap-8 overflow-scroll'>
            <div className='w-[90%] h-[43rem] rounded-md mt-8 drop-shadow-2xl'>
                {/* First heading section */}
                <div className='w-full h-16  bg-slate-50 rounded-t-md p-2 flex justify-between items-center'>
                    <div className='flex justify-center items-center gap-7'>
                        <IoSearchOutline className='cursor-pointer' size={25} />
                        <IoStar className='cursor-pointer' size={25} />
                        <TbChefHat className='cursor-pointer' size={25} />
                        <span className='text-xs hover:text-indigo-600 hover:cursor-pointer text-indigo-400 self-end font-bold'>Consumed food, amount</span>
                    </div>
                    <div className='w-[67%]  flex justify-evenly items-center'>
                        {["Calories", "Protein", "Carbs", "Fat", "Sat. Fat", "Trans Fat", "Fiber", "Sodium", "Calcium"].map((item, index) => (
                            <span key={index} className='text-xs hover:text-indigo-600 hover:cursor-pointer text-indigo-400 font-bold'>{item}</span>
                        ))}
                    </div>
                </div>
                {/* Second section where the breakfast, lunch, and dinner go */}
                <Breakfast />
                {breakfastModal && <BreakfastList  />}
                {/* Second section where the breakfast, lunch, and dinner go */}
                <Lunch />
                {lunchModal && <LunchList  />}
                {/* Second section where the breakfast, lunch, and dinner go */}
                <Dinner />
                {dinnerModal && <DinnerList  />}
                <Snack />
                {snackModal && <SnackList  />}
                
            </div>
        </div>
  )
}


{/* <CaloriesHeader />
        <CaloriesLine /> */}