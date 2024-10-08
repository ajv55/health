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
  const [overSearch, setOverSearch] = useState(false);
  const [overRecent, setOverRecent] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const currentDate = useSelector((state: RootState) => state.weight.currentDate);


  const workoutsRef = useRef<HTMLInputElement>(null);

  

  const searchParams = useSearchParams();
  // const meal = useSelector((state: RootState) => state.log.meal);
  const meal = searchParams.get('meal')
  console.log(meal)

  const fetchMealLogs = async () => {
    await axios.get(`/api/getMealLogs?currentDate=${currentDate}`).then((res: any) => {
        if(res.status === 201) {
          console.log(res.data)
            dispatch(setUserMealLogs(res?.data))
        }
    })
};

const fetchLunchLogs = async () => {
  await axios.get(`/api/getLunchLogs?currentDate=${currentDate}`).then((res: any) => {
      if(res.status === 201) {
          dispatch(setLunchLog(res.data))
      }
  })
};

const fetchDinnerLogs = async () => {
  await axios.get(`/api/getDinnerLogs?currentDate=${currentDate}`).then((res: any) => {
      if(res.status === 201) {
          dispatch(setDinnerLog(res.data))
      }
  })
};

const fetchSnackLogs = async () => {
  setSnackIsLoading(true)
  await axios.get(`/api/getSnackLogs?currentDate=${currentDate}`).then((res: any) => {
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

  console.log(overSearch)


  return (
    <div className='w-full h-screen  flex flex-col justify-start items-center gap-8 lg:overflow-hidden '>
    <div className='w-[90%] h-content rounded-md mt-8 drop-shadow-2xl'>
        {/* First heading section */}
        <div className='w-full h-16  bg-slate-50  rounded-t-md p-2 flex  justify-between items-center'>
            <div className='flex relative justify-center items-center gap-5'>
              {overSearch && <div className='w-[60%] absolute -bottom-7 -left-5 h-4 rounded-sm bg-black bg-opacity-30 flex p-0.5 justify-center items-center'><p className='text-[14px] text-white font-bold'>Click here to search foods</p></div>}
              {overRecent && <div className='w-[64%] absolute -bottom-7 -left-3 h-4 rounded-sm bg-black bg-opacity-30 flex p-0.5 justify-center items-center'><p className='text-[14px] text-white font-bold'>Click here for recent foods</p></div>}
                <IoSearchOutline onMouseEnter={() => setOverSearch(true)} onMouseLeave={() => setOverSearch(false)} onClick={() => router.push('/dashboard/calories/search')} className='cursor-pointer' size={25} />
                <IoStar onClick={() => router.push('/dashboard/calories/search?tab=recentMeals')} onMouseEnter={() => setOverRecent(true)} onMouseLeave={() => setOverRecent(false)}  className='cursor-pointer' size={25} />
                <TbChefHat onClick={() => router.push('/dashboard/calories/search?tab=recipes')} className='cursor-pointer' size={25} />
                <span className='text-xs hover:text-indigo-600 hover:cursor-pointer text-indigo-400 self-end font-bold'>Consumed food, amount</span>
            </div>
            <div className='w-[67%] lg:flex hidden overflow-x-scroll justify-evenly lg:gap-0 gap-5 items-center'>
                {["Calories", "Protein g", "Carbs g", "Fat g", "Sat. Fat g", "Trans. Fat g", "Fiber g", "Sodium mg", "Calcium %"].map((item, index) => (
                    <span key={index} className='text-xs lg:text-[15px]  lg:w-32 w-56 flex justify-center items-center  hover:text-indigo-600 hover:cursor-pointer text-indigo-400 font-bold'>{item}</span>
                ))}
            </div>
        </div>
        <div className='w-full h-content bg-gray-50 lg:hidden flex  justify-center  gap-2 items-center'>
        {["Calories", "Protein g", "Carbs g", "Fat g", "Sat. Fat g", "Trans. Fat g", "Fiber g", "Sodium mg", "Calcium %"].map((item, index) => (
                    <span key={index} className='text-[10px] text-balance text-center w-12 lg:text-[15px] flex justify-center items-center  hover:text-indigo-600 hover:cursor-pointer text-indigo-400 font-bold'>{item}</span>
                ))}
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