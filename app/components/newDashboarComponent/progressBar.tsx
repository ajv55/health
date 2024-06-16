'use client';
import { setUserMealLogs, setLunchLog, setDinnerLog, setSnackLog, setTotals } from "@/app/slices/logSlice";
import { RootState } from "@/app/store";
import axios, { all } from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const ProgressBar = () => {
  const {data: session} = useSession();

  const userCalories = session?.user.calories;
  const dispatch = useDispatch();

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
  await axios.get('/api/getSnackLogs').then((res: any) => {
      if(res.status === 201) {
          dispatch(setSnackLog(res.data))
      }
  })
};
  

  const breakfastLogs = useSelector((state: RootState) => state.log.userMealLogs);
  const lunchLogs = useSelector((state: RootState) => state.log.userLunchLogs);
  const dinnerLogs = useSelector((state: RootState) => state.log.userDinnerLogs);
  const snackLogs = useSelector((state: RootState) => state.log.userMealLogs);
  const total = useSelector((state: RootState) => state.log.totals);


 useEffect(() => {
  fetchMealLogs();
  fetchLunchLogs();
  fetchDinnerLogs();
  fetchSnackLogs();
 } , [])

  useEffect(() => {
   

    function calculateTotalNutrients(logs: any) {
      return logs.reduce((totals: any, log: any) => {
        totals.calories += (log.calories || 0);
        totals.fat += (log.fat || 0);
        totals.protein += (log.protein || 0);
        totals.carbs += (log.carbs || 0);
        totals.sodium += (log.sodium || 0);
        totals.transFat += (log.transFat || 0);
        totals.satFat += (log.satFat || 0);
        totals.calcium += (log.calcium || 0);
        totals.fiber += (log.fiber || 0);
        return totals;
      }, {
        calories: 0,
        fat: 0,
        protein: 0,
        carbs: 0,
        sodium: 0,
        transFat: 0,
        satFat: 0,
        calcium: 0,
        fiber: 0
      });
    }
    

    // Combine all logs into one array
    const allLogs = [...breakfastLogs!, ...lunchLogs!, ...dinnerLogs!, ...snackLogs!];

     // Use a Map to ensure unique logs based on 'id'
     const uniqueLogs = Array.from(new Map(allLogs.map((log: any) => [log?.id!, log])).values());

    console.log('all log: ', uniqueLogs)
    // Calculate total calories from combined logs
    const totalNutrients = calculateTotalNutrients(allLogs);
    dispatch(setTotals(totalNutrients));
  }, [breakfastLogs, lunchLogs, dinnerLogs, snackLogs, dispatch]);

  const maintenanceCalories = Number(userCalories) || 0;
  const caloriesLeft = maintenanceCalories - total?.calories;

  console.log(total)

  const circumference = 2 * Math.PI * 120;
  const progress = Math.max(0, Math.min(1, total?.calories / maintenanceCalories));
  const offset = circumference - progress * circumference;
  
  console.log(breakfastLogs)

  return (
    <div className="relative flex  items-center justify-center w-full h-full">
      <svg className="w-full h-full transform -rotate-90">
        <circle
          cx="50%"
          cy="50%"
          r="120"
          stroke="#edeffb"
          strokeWidth="10"
          fill="transparent"
        />
        <circle
          cx="50%"
          cy="50%"
          r="120"
          stroke="#3f22f9"
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={Math.round(offset)}
          className="transition-all duration-300 ease-in-out"
        />
      </svg>
      <div className="absolute flex flex-col justify-center items-center gap-2 text-xl font-bold">
        <span className="text-3xl text-indigo-600 font-light">{Math.round(total.calories)}</span>
        <span className="text-xl text-gray-400 font-extralight">Calories Left</span>
        <span className="text-xl text-gray-500 font-light">{Math.round(caloriesLeft)}</span>
      </div>
    </div>
  );
};

export default ProgressBar;

