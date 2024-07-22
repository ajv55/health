'use client';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { TbChefHat } from 'react-icons/tb'
import { useSelector, useDispatch } from 'react-redux';
import { resetModals, setBreakfastModal, setUserMealLogs } from '@/app/slices/logSlice';
import { RootState } from '@/app/store';
import { useEffect, useState } from 'react';
import axios from 'axios';

type TotalState = {
    calories?: number,
    carbs?: number,
    protein?: number,
    fat?: number,
    satFat?: number,
    calcium?: number,
    transFat?: number,
    fiber?: number,
    sodium?: number

}

export default function Breakfast() {

    const breakfastModal = useSelector((state: RootState) => state.log.breakfastModal);
    const meal = useSelector((state: RootState) => state.log.meal);
    const breakfastLog = useSelector((state: RootState) => state.log.userMealLogs);
    const dispatch = useDispatch();
    const [pressed, setPressed] = useState<boolean>(false);
    const [totals, setTotals] = useState<TotalState>({});
    const [isLoading, setIsLoading] = useState(false);

    function safeAdd(value: any) {
        return isNaN(value) || value === null ? 0 : value;
      }

      function calculateTotalsFromLogs(logs: any) {
        return logs.reduce((totals: any, log: any) => {
          totals.calcium += safeAdd(log.calcium);
          totals.calories += safeAdd(log.calories);
          totals.carbs += safeAdd(log.carbs);
          totals.fat += safeAdd(log.fat);
          totals.fiber += safeAdd(log.fiber);
          totals.protein += safeAdd(log.protein);
          totals.satFat += safeAdd(log.satFat);
          totals.transFat += safeAdd(log.transFat); // Updated key to match state
          totals.sodium += safeAdd(log.sodium);
          return totals;
        }, {
          calcium: 0,
          calories: 0,
          carbs: 0,
          fat: 0,
          fiber: 0,
          protein: 0,
          satFat: 0,
          sodium: 0,
          transFat: 0,
        });
      }


    const amounts = [`${totals?.calories === undefined ? 0 : Math.round(totals?.calories)}`, `${totals?.protein?.toFixed(2) === undefined ? 0 : Math.round(totals.protein)}`, `${totals?.carbs?.toFixed(2) === undefined ? 0 : totals.carbs.toFixed(0) }`, `${totals?.fat?.toFixed(2) === undefined ? 0 : totals?.fat?.toFixed(0)}`, `${totals?.satFat?.toFixed(2) === undefined ? 0 : totals?.satFat?.toFixed(0)}`, `${totals?.transFat?.toFixed(2) === undefined ? 0 : totals?.transFat?.toFixed(0)}`, `${totals?.fiber?.toFixed(2) === undefined ? 0 : totals?.fiber?.toFixed(0)}`, `${totals?.calcium?.toFixed(2) === undefined ? 0 : totals?.calcium?.toFixed(0)}`, `${totals?.sodium?.toFixed(2) ? 0 : totals?.sodium?.toFixed(0) || 0}`];

    useEffect(() => {
        console.log(meal)
        if(meal === 'breakfast'){
            dispatch(setBreakfastModal(true));
        } 
        const totalValues = calculateTotalsFromLogs(breakfastLog);
      setTotals(totalValues);
    }, [meal, dispatch, breakfastLog])

    console.log(breakfastLog)
    console.log(totals)



  return (
    <div className='w-full lg:h-16 h-20 lg:p-2 p-1 bg-indigo-200 flex lg:flex-row flex-col-reverse justify-between overflow-x-scroll items-center'>
      <div className='flex relative lg:w-[30%] w-full sm:w-[32%]  justify-start gap-2 lg:justify-start lg:gap-24 items-center'>
          {breakfastModal ? (
              <IoIosArrowUp
                  onClick={() => dispatch(setBreakfastModal(false))}
                  size={25}
                  className={`text-gray-500 hover:bg-gray-500 hover:bg-opacity-15 p-1 w-8 h-8 rounded-full cursor-pointer`}
              />
          ) : (
              <IoIosArrowDown
                  onClick={() => dispatch(setBreakfastModal(true))}
                  size={25}
                  className={`text-gray-500 hover:bg-gray-500 hover:bg-opacity-15 p-1 w-8 h-8 rounded-full cursor-pointer ${pressed ? 'pressed' : ''}`}
              />
          )}
          <h1 className='text-lg sm:text-xl font-medium tracking-wider leading-5'>Breakfast</h1>
      </div>
      <div className='w-full lg:w-[67%] flex justify-evenly items-center'>
          {amounts.map((value, index) => (
              <span key={index} className='text-xs sm:text-lg w-[50px] sm:w-32 flex justify-center items-center hover:text-indigo-600 hover:cursor-pointer text-indigo-400 font-bold'>{value}</span>
          ))}
      </div>
  </div>

            
  )
}


