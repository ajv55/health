'use client';
import { setUserMealLogs } from "@/app/slices/logSlice";
import { RootState } from "@/app/store";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const calculateTotalCalories = (logs: any) => {
  return logs.reduce((total: any, log: any) => total + (log.calories || 0), 0);
};

export default function MealGroup() {

  const breakfastLogs = useSelector((state: RootState) => state.log.userMealLogs);
  const lunchLogs = useSelector((state: RootState) => state.log.userLunchLogs);
  const dinnerLogs = useSelector((state: RootState) => state.log.userDinnerLogs);
  const snackLogs = useSelector((state: RootState) => state.log.userSnackLogs);

  const [breakfastCalories, setBreakfastCalories] = useState(0);
  const [lunchCalories, setLunchCalories] = useState(0);
  const [dinnerCalories, setDinnerCalories] = useState(0);
  const [snackCalories, setSnackCalories] = useState(0);


   const dispatch = useDispatch();

   const fetchMealLogs = async () => {
    await axios.get('/api/getMealLogs').then((res: any) => {
        if(res.status === 201) {
            dispatch(setUserMealLogs(res.data))
        }
    })
};

useEffect(() => {
 
  // Calculate total calories for breakfast
  const breakfastTotal = calculateTotalCalories(breakfastLogs);
  setBreakfastCalories(breakfastTotal);
  const lunchTotal = calculateTotalCalories(lunchLogs);
  setLunchCalories(lunchTotal);
  const dinnerTotal = calculateTotalCalories(dinnerLogs);
  setDinnerCalories(dinnerTotal);
  const snackTotal = calculateTotalCalories(snackLogs);
  setSnackCalories(snackTotal);
}, [breakfastLogs, lunchLogs, dinnerLogs, snackLogs]);




  return (
    <div className=' w-full flex flex-col justify-evenly items-center h-full'>

    <div className='flex flex-col justify-center items-center gap-1'>
        <h1 className='text-gray-500 text-xl font-light'>Breakfast</h1>
        <span className='text-indigo-600 text-xl'>{Math.round(breakfastCalories)}</span>
    </div>

    <div className='flex flex-col justify-center items-center gap-1'>
        <h1 className='text-gray-500 text-xl font-light'>Lunch</h1>
        <span className='text-indigo-600 text-xl'>{Math.round(lunchCalories)}</span>
    </div>

    <div className='flex flex-col justify-center items-center gap-1'>
        <h1 className='text-gray-500 text-xl font-light'>Dinner</h1>
        <span className='text-indigo-600 text-xl'>{Math.round(dinnerCalories)}</span>
    </div>

    <div className='flex flex-col justify-center items-center gap-1'>
        <h1 className='text-gray-500 text-xl font-light'>Snack</h1>
        <span className='text-indigo-600 text-xl'>{Math.round(snackCalories)}</span>
    </div>

    </div>
  )
}
