import React, { useEffect, useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { setDinnerModal } from '@/app/slices/logSlice';
import { RootState } from '@/app/store';

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

export default function Dinner() {

    const dispatch = useDispatch();
    const dinnerModal = useSelector((state: RootState) => state.log.dinnerModal);
    const dinnerLogs = useSelector((state: RootState) => state.log.userDinnerLogs);
    const meal = useSelector((state: RootState) => state.log.meal);
    const [totals, setTotals] = useState<TotalState>({});
    const [isLoading, setIsLoading] = useState(false);

    const amounts = [`${totals?.calories === undefined ? 0 : Math.round(totals?.calories)}`, `${totals?.protein?.toFixed(2) === undefined ? 0 : totals.protein.toFixed(2)}`, `${totals?.carbs?.toFixed(2) === undefined ? 0 : totals.carbs.toFixed(2) }`, `${totals?.fat?.toFixed(2) === undefined ? 0 : totals?.fat?.toFixed(2)}`, `${totals?.satFat?.toFixed(2) === undefined ? 0 : totals?.satFat?.toFixed(2)}`, `${totals?.transFat?.toFixed(2) === undefined ? 0 : totals?.transFat?.toFixed(2)}`, `${totals?.fiber?.toFixed(2) === undefined ? 0 : totals?.fiber?.toFixed(2)}`, `${totals?.calcium?.toFixed(2) === undefined ? 0 : totals?.calcium?.toFixed(2)}`, `${totals?.sodium?.toFixed(2) ? 0 : totals?.sodium?.toFixed(2)}`];

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

    useEffect(() => {
        console.log(meal)
        if(meal === 'dinner'){
            dispatch(setDinnerModal(true));
        } 
        const totalValues = calculateTotalsFromLogs(dinnerLogs);
      setTotals(totalValues);
    }, [meal, dispatch, dinnerLogs])

  return (
    <div className='w-full h-16 p-2 bg-indigo-200 flex justify-between items-center'>
        <div className=' flex w-[30%] justify-between gap-[93px] items-center'>
            {dinnerModal ? <IoIosArrowUp  onClick={() => dispatch(setDinnerModal(!dinnerModal))} size={25} className='text-gray-500 hover:bg-gray-500 hover:bg-opacity-20 p-1 w-8 h-8 hover:rounded-full cursor-pointer' /> : <IoIosArrowDown onClick={() => dispatch(setDinnerModal(!dinnerModal))} size={25} className='text-gray-500 hover:bg-gray-500 hover:bg-opacity-20 p-1 w-8 h-8 hover:rounded-full cursor-pointer' />}
            <h1 className='text-xl font-medium tracking-wider leading-5'>Dinner</h1>
            <button className='text-indigo-600 text-lg tracking-wide font-bold'>ADD</button>
        </div>
        <div className='w-[67%]  flex justify-evenly items-center'>
            {amounts.map((value, index) => (
                <span key={index} className='text-md  w-32 flex justify-center items-center hover:text-indigo-600 hover:cursor-pointer text-indigo-400 font-bold'>{value}</span>
            ))}
        </div>
    </div>
  )
}
