'use client';
import React, { useEffect, useRef, useState } from 'react'
import CaloriesHeader from '@/app/components/caloriesComponent/caloriesHeader'
import CaloriesLine from '@/app/components/caloriesComponent/caloriesLine'
import { IoSearchOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { TbChefHat } from "react-icons/tb";
import Breakfast from '@/app/components/newDashboarComponent/breakfast';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { resetModals, setBreakfastModal, setDinnerLog, setDinnerModal, setLunchLog, setLunchModal, setMeal, setSnackLog, setSnackModal, setUserMealLogs } from '@/app/slices/logSlice';
import Lunch from '@/app/components/newDashboarComponent/lunch';
import Dinner from '@/app/components/newDashboarComponent/dinner';
import Snack from '@/app/components/newDashboarComponent/snack';
import BreakfastList from '@/app/components/newDashboarComponent/breakfastList';
import LunchList from '@/app/components/newDashboarComponent/lunchList';
import DinnerList from '@/app/components/newDashboarComponent/dinnerList';
import SnackList from '@/app/components/newDashboarComponent/snackList';
import { useSearchParams } from 'next/navigation';
import BreakfastLogs from '@/app/components/newDashboarComponent/breakfastLogs';
import axios from 'axios';
import LunchLog from '@/app/components/newDashboarComponent/lunchLog';
import DinnerLog from '@/app/components/newDashboarComponent/dinnerLogs';
import SnackLog from '@/app/components/newDashboarComponent/snackLogs';


export default function Page() {

  
  const breakfastModal = useSelector((state: RootState) => state.log.breakfastModal);
  const lunchModal = useSelector((state: RootState) => state.log.lunchModal);
  const dinnerModal = useSelector((state: RootState) => state.log.dinnerModal);
  const snackModal = useSelector((state: RootState) => state.log.snackModal);
  const mealLogs = useSelector((state: RootState) => state.log.userMealLogs);
  const lunchLogs = useSelector((state: RootState) => state.log.userLunchLogs);
  const dinnerLogs = useSelector((state: RootState) => state.log.userDinnerLogs);
  const snackLogs = useSelector((state: RootState) => state.log.userSnackLogs);
  const [snackIsLoading, setSnackIsLoading] = useState(false);
  const dispatch = useDispatch();


  const workoutsRef = useRef<HTMLInputElement>(null);

  

  const searchParams = useSearchParams();
  // const meal = useSelector((state: RootState) => state.log.meal);
  const meal = searchParams.get('meal')
  console.log(meal)

  const fetchMealLogs = async () => {
    await axios.get('/api/getMealLogs').then((res: any) => {
        if(res.status === 201) {
            dispatch(setUserMealLogs(res.data))
        }
    })
};

const fetchLunchLogs = async () => {
  await axios.get('/api/getLunchLogs').then((res: any) => {
      if(res.status === 201) {
          dispatch(setLunchLog(res.data))
      }
  })
};

const fetchDinnerLogs = async () => {
  await axios.get('/api/getDinnerLogs').then((res: any) => {
      if(res.status === 201) {
          dispatch(setDinnerLog(res.data))
      }
  })
};

const fetchSnackLogs = async () => {
  setSnackIsLoading(true)
  await axios.get('/api/getSnackLogs').then((res: any) => {
      if(res.status === 201) {
          dispatch(setSnackLog(res.data))
          setSnackIsLoading(false)
      }
  })

  
};

useEffect(() => {
    fetchMealLogs();
    fetchLunchLogs();
    fetchDinnerLogs();
    fetchSnackLogs();
}, [])

  useEffect(() => {
    if (meal) {
      switch (meal) {
        case 'breakfast': 
          dispatch(setBreakfastModal(true))
          break;
        case 'lunch':
          dispatch(setMeal('lunch'));
          break;
        case 'dinner':
          dispatch(setMeal('dinner'));
          break;
        case 'snack':
          dispatch(setMeal('snack'));
          break;
        case 'workout':
          workoutsRef.current?.focus();
          break;
        default:
          break;
      }
    }
    
  }, [meal,dispatch]);


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
                        {["Calories", "Protein g", "Carbs g", "Fat g", "Sat. Fat g", "Trans. Fat g", "Fiber g", "Sodium mg", "Calcium %"].map((item, index) => (
                            <span key={index} className='text-md  w-32 flex justify-center items-center  hover:text-indigo-600 hover:cursor-pointer text-indigo-400 font-bold'>{item}</span>
                        ))}
                    </div>
                </div>
                {/* Second section where the breakfast, lunch, and dinner go */}
                <Breakfast />
                {mealLogs?.length !== 0 && breakfastModal && mealLogs?.map((meals: any, idx: number) => {
                  console.log(meals)
                  return <BreakfastLogs key={idx} id={meals?.id} name={meals?.name} fiber={meals?.fiber} carbs={meals?.carbs} calories={meals?.calories} fat={meals?.fat} protein={meals?.protein} transFat={meals?.transFat} satFat={meals?.satFat} calcium={meals?.calcium} sodium={meals?.sodium} />
                })}
                {breakfastModal && <BreakfastList  />}
                {/* Second section where the breakfast, lunch, and dinner go */}
                <Lunch />
                {lunchLogs?.length !== 0 && lunchModal && lunchLogs?.map((meals: any, idx: number) => {
                  console.log(meals)
                  return <LunchLog key={idx} id={meals?.id} name={meals?.name} fiber={meals?.fiber} carbs={meals?.carbs} calories={meals?.calories} fat={meals?.fat} protein={meals?.protein} transFat={meals?.transFat} satFat={meals?.satFat} calcium={meals?.calcium} sodium={meals?.sodium} />
                })}
                {lunchModal && <LunchList  />}
                {/* Second section where the breakfast, lunch, and dinner go */}
                <Dinner />
                {dinnerLogs?.length !== 0 && dinnerModal && dinnerLogs?.map((meals: any, idx: number) => {
                  console.log(meals)
                  return <DinnerLog key={idx} id={meals?.id} name={meals?.name} fiber={meals?.fiber} carbs={meals?.carbs} calories={meals?.calories} fat={meals?.fat} protein={meals?.protein} transFat={meals?.transFat} satFat={meals?.satFat} calcium={meals?.calcium} sodium={meals?.sodium} />
                })}
                {dinnerModal && <DinnerList  />}
                <Snack />
                {snackLogs?.length !== 0 && snackModal && snackLogs?.map((meals: any, idx: number) => {
                  console.log(meals)
                  return <SnackLog key={idx} id={meals?.id} name={meals?.name} fiber={meals?.fiber} carbs={meals?.carbs} calories={meals?.calories} fat={meals?.fat} protein={meals?.protein} transFat={meals?.transFat} satFat={meals?.satFat} calcium={meals?.calcium} sodium={meals?.sodium} />
                })}
                {snackModal && <SnackList  />}
                
            </div>
        </div>
  )
}


{/* <CaloriesHeader />
        <CaloriesLine /> */}