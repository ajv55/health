'use client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { RootState } from '@/app/store';
import { format } from 'date-fns';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const FoodTracker = () => {
  const dispatch = useDispatch();
  const [breakfastLogs, setBreakfastLogs] = useState([]);
  const [lunchLogs, setLunchLog] = useState([]);
  const [dinnerLogs, setDinnerLog] = useState([]);
  const [snackLogs, setSnackLog] = useState([]);
  const {data: sessoin} = useSession();
  const userIsActive = sessoin?.user?.isActive || false;
  const currentDate = useSelector((state: RootState) => state.weight.currentDate);
  const formattedDate = format(currentDate!, 'MMM d');

  useEffect(() => {
    fetchMealLogs();
  }, []);

  const fetchMealLogs = async () => {
    await axios.get('/api/getAllLogs').then((res) => {
      if(res.status === 201) {
        console.log(res.data);
        setBreakfastLogs(res.data.breakfast);
        setLunchLog(res.data.lunch);
        setDinnerLog(res.data.dinner);
        setSnackLog(res.data.snack);
      }
    })
  }

  const renderMealItems = (mealItems: any) => {
    return mealItems.map((item: any, index: number) => (
      <Link href={{
        pathname: `/dashboard/calories/search/${item.name}`,
        query: {
          name: item.name,
          calories: item.calories,
          fat: item.fat,
          carbs: item.carbs,
          protein: item.protein,
          servingSize: item.servingSize,
          sodium: item.sodium,
          transFat: item.transFat,
          satFat: item.satFat,
          calcium: item.calcium,
          fiber: item.fiber
        }
      }} key={index} className="flex flex-col bg-indigo-50 hover:bg-white hover:ring-2 hover:ring-indigo-400 shadow-md hover:shadow-indigo-200 p-2 rounded-md justify-between items-start">
        <span className="text-xs text-gray-500">{format(new Date(item.createdAt), 'eeee, MMMM d, yyyy')}</span>
        <div className='flex justify-between items-center w-full'>
          <div className="flex items-center space-x-2">
            <span className='text-indigo-600 text-lg'>{item.name}</span>
          </div>
          <span className="text-lg text-indigo-500">{item.calories} cals</span>
          </div>
      </Link>
    ));
  };


  return (
    <div className="p-4 lg:max-w-6xl w-[95%] mx-auto mt-4   overflow-scroll bg-indigo-50 ring-2 ring-indigo-400 rounded-lg h-[38rem]">
      <h1 className="text-4xl font-bold bg-gradient-to-tl from-indigo-500 to-indigo-400 bg-clip-text text-transparent mb-4">Recent Meals</h1>
      <div className="bg-white ring-2 ring-indigo-400 p-6 rounded-lg shadow-md">
        <ul className="divide-y divide-gray-200">
          <li className="py-4">
            <h2 className="text-lg font-semibold text-indigo-600">Breakfast Logs</h2>
            <ul className="mt-1 space-y-1">
              {renderMealItems(breakfastLogs)}
              {breakfastLogs?.length === 0 && <h1 className='text-indigo-300'>No breakfast logs on {formattedDate}.</h1>}
            </ul>
          </li>
          <li className="py-4">
            <h2 className="text-lg font-semibold text-indigo-600">Lunch Logs</h2>
            <ul className="mt-1 space-y-1">
              {renderMealItems(lunchLogs)}
              {lunchLogs?.length === 0 && <h1 className='text-indigo-300'>No lunch logs on {formattedDate}.</h1>}
            </ul>
          </li>
          <li className="py-4">
            <h2 className="text-lg font-semibold text-indigo-600">Dinner Logs</h2>
            <ul className="mt-1 space-y-1">
              {renderMealItems(dinnerLogs)}
              {dinnerLogs?.length === 0 && <h1 className='text-indigo-300'>No dinner logs on {formattedDate}.</h1>}
            </ul>
          </li>
          <li className="py-4">
            <h2 className="text-lg font-semibold text-indigo-600">Snack Logs</h2>
            <ul className="mt-1 space-y-1">
              {renderMealItems(snackLogs)}
              {snackLogs?.length === 0 && <h1 className='text-indigo-300'>No snack logs on {formattedDate}.</h1>}
            </ul>
          </li>
        </ul>
      </div>
      <div className="mt-4 flex justify-between items-center w-full">
          <Link href='/dashboard/calories/search/customFood' className="text-indigo-600 lg:text-lg text-xs font-semibold">
            CREATE AND LOG CUSTOM FOOD
          </Link>
          <h2>{userIsActive === false ? <Link className="text-indigo-600 lg:text-sm text-[10px]" href='/pricing'>Become a premium user!</Link> : ''}</h2>
        </div>
    </div>
  );
};

export default FoodTracker;
