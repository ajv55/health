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
import { resetModals, setBreakfastModal, setDinnerLog, setDinnerModal, setGrams, setLunchLog, setLunchModal, setMeal, setSnackLog, setSnackModal, setUserMealLogs } from '@/app/slices/logSlice';
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
import LogDailySteps from '@/app/components/newDashboarComponent/loggingSteps';
import { AnimatePresence, motion } from 'framer-motion';
import ProgressBar from '@/app/components/newDashboarComponent/progressBar';
import LogProgress from '@/app/components/newDashboarComponent/logProgress';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


export default function Page() {

  const {data: session} = useSession();

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
  const router = useRouter();


  const workoutsRef = useRef<HTMLInputElement>(null);

  

  const searchParams = useSearchParams();
  // const meal = useSelector((state: RootState) => state.log.meal);
  const meal = searchParams.get('meal')
  console.log(meal)

  const fetchMealLogs = async () => {
    await axios.get('/api/getBreakfast').then((res: any) => {
        if(res.status === 201) {
          console.log(res.data)
            dispatch(setUserMealLogs(res?.data?.breakfast_items))
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


  const userCalories = Number(session?.user?.calories);
  console.log(session?.user?.calories)
  const grams = useSelector((state: RootState) => state?.log?.grams);

  const calculateMacros = (maintenanceCalories: number) => {
    // Calculate macronutrient calories
    const proteinCalories = maintenanceCalories * 0.3;
    const carbCalories = maintenanceCalories * 0.4;
    const fatCalories = maintenanceCalories * 0.3;

    // Convert macronutrient calories to grams
    const proteinGrams = proteinCalories / 4;
    const carbGrams = carbCalories / 4;
    const fatGrams = fatCalories / 9;

    // Calculate saturated fat calories (10% of total calories) and convert to grams
    const satFatCalories = maintenanceCalories * 0.1;
    const satFatGrams = satFatCalories / 9;

    // Trans fat grams (recommended to be as low as possible, here we set a small value)
    const transFatGrams = 0;  // Ideally zero

    // Sodium in mg (standard recommendation)
    const sodiumMg = 2300;

    // Calcium in mg (standard recommendation)
    const calciumMg = 1000;

    // Fiber in grams (average between recommendations for men and women)
    const fiberGrams = (25 + 38) / 2;

    return {
        proteinGrams,
        carbGrams,
        fatGrams,
        satFatGrams,
        transFatGrams,
        sodiumMg,
        calciumMg,
        fiberGrams
    };
};

  

  useEffect(() => {
    
    if(session?.user?.calories !== undefined){ 
      const gram = calculateMacros(userCalories)
     dispatch(setGrams(gram))
    }
    
  }, [session?.user.calories])


  return (
    <div className='w-full h-screen flex flex-col justify-start items-center gap-8 overflow-hidden'>
            <div className='w-[90%] h-content rounded-md mt-8 drop-shadow-2xl'>
                {/* First heading section */}
                <div className='w-full h-16  bg-slate-50 rounded-t-md p-2 flex justify-between items-center'>
                    <div className='flex justify-center items-center gap-7'>
                        <IoSearchOutline onClick={() => router.push('/dashboard/calories/search')} className='cursor-pointer' size={25} />
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
            <AnimatePresence>
            {!snackModal && !breakfastModal && !lunchModal && !dinnerModal && <LogProgress />}
            </AnimatePresence>
            

            
        </div>
  )
}


{/* <CaloriesHeader />
        <CaloriesLine /> */}