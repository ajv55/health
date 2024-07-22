'use client';
import { motion } from 'framer-motion';
import ProgressBar from './progressBar'
import ProteinProgress from './proteinProgress';
import LogProtein from './logProtein';
import LogCarb from './logCarb';
import LogFat from './logFat';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setDinnerLog, setLunchLog, setSnackLog, setTotals, setUserMealLogs } from '@/app/slices/logSlice';
import { useEffect, useState } from 'react';
import NutritionComponent from './nutrientProgress';
import { RootState } from '@/app/store';

export default function LogProgress() {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true); 

    const breakfastLogs = useSelector((state: RootState) => state.log.userMealLogs);
  const lunchLogs = useSelector((state: RootState) => state.log.userLunchLogs);
  const dinnerLogs = useSelector((state: RootState) => state.log.userDinnerLogs);
  const snackLogs = useSelector((state: RootState) => state.log.userMealLogs);
  const currentDate = useSelector((state: RootState) => state.weight.currentDate);
  const total = useSelector((state: RootState) => state.log.totals);

  const fetchMealLogs = async (date: any) => {
    await axios.get(`/api/getBreakfastByDate?date=${date}`).then((res: any) => {
      if (res.status === 201) {
        dispatch(setUserMealLogs(res.data))
      }
    });
  };

  const fetchLunchLogs = async (date: Date) => {
    await axios.get(`/api/getLunchByDate?date=${date}`).then((res: any) => {
      if (res.status === 201) {
        console.log(res)
        dispatch(setLunchLog(res?.data))
      }
    });
  };

  const fetchDinnerLogs = async (date: Date) => {
    await axios.get(`/api/getDinnerByDate?date=${date}`).then((res: any) => {
      if (res.status === 201) {
        dispatch(setDinnerLog(res.data))
      }
    });
  };
  
  const fetchSnackLogs = async (date: Date) => {
    await axios.get(`/api/getSnackByDate?date=${date}`).then((res: any) => {
      if (res.status === 201) {
        dispatch(setSnackLog(res.data))
      }
    });
  };
    
  useEffect(() => {
    setLoading(true); // Set loading to true before fetching
    Promise.all([
        fetchMealLogs(currentDate),
        fetchLunchLogs(currentDate!),
        fetchDinnerLogs(currentDate!),
        fetchSnackLogs(currentDate!)
    ]).then(() => {
        setLoading(false); // Set loading to false after all fetches are complete
    });
}, [currentDate]);

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


  return (
    <motion.div
    className='w-[90%] h-[45rem] flex justify-start  items-center bg-white ring-2 ring-indigo-500 rounded-xl mb-8'
    initial={{ y: '100vh', opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: '100vh', opacity: 0 }}
    transition={{ type: 'spring', stiffness: 50, damping: 20 }}
    >
    <div className=' w-[28%] h-full'>
       <ProgressBar />
    </div>

    <div className='w-[23%] flex flex-col  h-full  '>
            <LogProtein />
            <LogCarb />
            <LogFat />
        </div>

    <div className=' w-[50%] h-full '>
        <NutritionComponent />
    </div>
    </motion.div>
  )
}
