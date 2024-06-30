'use client';
import React, { useEffect, useState } from 'react'
import DatePicker from '../tabComponents/datePicker'
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { format } from 'date-fns';
import { useSession } from 'next-auth/react';
import axios from 'axios';


export default function Summary() {
    const {data: session} = useSession();

    const [breakfast, setBreakfast] = useState([]);
    const [lunch, setLunch] = useState([]);
    const [dinner, setDinner] = useState([]);
    const [snack, setSnack] = useState([]);
    const [totalProgress, setTotalProgress] = useState<any>([]);
    const [loading, setLoading] = useState(true); 


    const userCalories = session?.user.recommend;
    const total = useSelector((state: RootState) => state.log.totals);
    const currentDate = useSelector((state: RootState) => state.weight.currentDate);
    const formattedDate = format(currentDate!, 'MMM d');

    const fetchMealLogs = async (date: any) => {
        await axios.get(`/api/getBreakfastByDate?date=${date}`).then((res: any) => {
          if (res.status === 201) {
            setBreakfast(res.data);
          }
        });
      };

      const fetchLunchLogs = async (date: Date) => {
        await axios.get(`/api/getLunchByDate?date=${date}`).then((res: any) => {
          if (res.status === 201) {
            console.log(res)
            setLunch(res.data);
          }
        });
      };

      const fetchDinnerLogs = async (date: Date) => {
        await axios.get(`/api/getDinnerLogs?date=${date}`).then((res: any) => {
          if (res.status === 201) {
            setDinner(res.data);
          }
        });
      };
      
      const fetchSnackLogs = async (date: Date) => {
        await axios.get(`/api/getSnackLogs?date=${date}`).then((res: any) => {
          if (res.status === 201) {
            setSnack(res.data);
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
        const allLogs = [...breakfast!, ...lunch!, ...dinner!, ...snack!];
    
         // Use a Map to ensure unique logs based on 'id'
         const uniqueLogs = Array.from(new Map(allLogs.map((log: any) => [log?.id!, log])).values());
    
        console.log('all log: ', uniqueLogs)
        // Calculate total calories from combined logs
        const totalNutrients = calculateTotalNutrients(allLogs);
        setTotalProgress(totalNutrients);
      }, [breakfast, lunch, dinner, snack]);
    

      console.log(totalProgress)
   

    const maintenanceCalories = Number(userCalories) || 0;
   const caloriesLeft = maintenanceCalories - (totalProgress?.calories || 0);
   const percentageConsumed = ((totalProgress?.calories || 0) / maintenanceCalories) * 100;

   console.log(percentageConsumed)
  return (
    <div className='max-w-6xl mx-auto bg-gray-100 rounded-lg ring-1 ring-indigo-300 p-4 drop-shadow-xl'>
         <div className="flex border-b-zinc-800 border-b p-2 items-center justify-between">
        <h2 className="text-xl font-bold text-indigo-600">Calories Analysis on {formattedDate}</h2>
        <button className="text-indigo-600 font-medium">Get Premium Analysis</button>
      </div>
      <div className="mt-4">
      {loading ? (
                    <div>
                        <div className="h-6 bg-gray-300 w-32 rounded-full animate-pulse mb-2"></div>
                        <div className="h-4 bg-gray-300 w-64 rounded-full animate-pulse mb-2 "></div>
                        <div className="h-3 bg-gray-300 w-13 rounded-full animate-pulse mb-2 "></div>
                        <div className="h-2 bg-gray-300 rounded-full animate-pulse"></div>
                    </div>
                ) : (
                    <>
                        <div className="text-gray-600 text-2xl">{Math.round(totalProgress.calories)} cals</div>
                        <div className="text-lg text-gray-500">{Math.round(percentageConsumed)}% of budget {maintenanceCalories} cals</div>
                        <div className="text-lg font-semibold text-gray-800">{Math.round(caloriesLeft)} left</div>
                        <div className="h-2 mt-2 bg-gray-200 rounded-full">
                            <div className="h-full bg-indigo-600 rounded-full" style={{ width: `${Math.round(percentageConsumed)}%` }}></div>
                        </div>
                    </>
                )}
      </div>
      <div className="mt-6">
       <DatePicker />
        {/* Assuming you will insert the date picker here */}
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-bold text-gray-800">About Calories</h3>
        <p className="text-gray-600 text-sm mt-2">
          Calories measure the amount of energy we consume from foods and beverages and the amount we burn from basal metabolism (at complete rest), thermogenesis (to digest and process food), and physical activity. To lose weight, calories intake must be less than calories burned. To gain weight, calories intake must be more than calories burned. To maintain weight, calories intake needs to match calories burned.
        </p>
        <div className="mt-4">
          <a href="#" className="text-indigo-600 font-medium">Read Article</a>
          <a href="#" className="ml-4 text-indigo-600 font-medium">Related Nutrients</a>
        </div>
      </div>
        
    </div>
  )
}
