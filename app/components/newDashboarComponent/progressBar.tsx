'use client';
import { setUserMealLogs, setLunchLog, setDinnerLog, setSnackLog } from "@/app/slices/logSlice";
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
  const [totalCalories, setTotalCalories] = useState(0);

 useEffect(() => {
  fetchMealLogs();
  fetchLunchLogs();
  fetchDinnerLogs();
  fetchSnackLogs();
 } , [])

  useEffect(() => {
   

    function calculateTotalCalories(logs: any) {
      return logs.reduce((total: any, log: any) => total + (log.calories || 0), 0);
    }

    // Combine all logs into one array
    const allLogs = [...breakfastLogs!, ...lunchLogs!, ...dinnerLogs!, ...snackLogs!];

     // Use a Map to ensure unique logs based on 'id'
     const uniqueLogs = Array.from(new Map(allLogs.map((log: any) => [log?.id!, log])).values());

    console.log('all log: ', uniqueLogs)
    // Calculate total calories from combined logs
    const total = calculateTotalCalories(uniqueLogs);
    console.log('total: ', total)
    setTotalCalories(total);
  }, [breakfastLogs, lunchLogs, dinnerLogs, snackLogs]);

  const maintenanceCalories = Number(userCalories) || 0;
  const caloriesLeft = maintenanceCalories - totalCalories;

  console.log(breakfastLogs)

  const circumference = 2 * Math.PI * 120;
  const progress = Math.max(0, Math.min(1, totalCalories / maintenanceCalories));
  const offset = circumference - progress * circumference;
  
  console.log(Math.round(circumference))

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
        <span className="text-3xl text-indigo-600 font-light">{Math.round(totalCalories)}</span>
        <span className="text-xl text-gray-400 font-extralight">Calories Left</span>
        <span className="text-xl text-gray-500 font-light">{Math.round(caloriesLeft)}</span>
      </div>
    </div>
  );
};

export default ProgressBar;

