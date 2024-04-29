'use client';
import {ChangeEvent, useState} from 'react';
import CalForm from './calForm';
import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/app/store';
import {setUsersMeals} from '@/app/slices/mealSlice';
import {format} from 'date-fns'

type DataTypes = {
  mealType?: string,
  foodItem: string,
  calories: number,
  date: any,
  time?: string
}

export default function CaloriesHeader() {

  const list  = useSelector((state: RootState) => state.meal.usersMeals)
  const dispatch = useDispatch<AppDispatch>();


  const [isOpen, setOpen] = useState(false);
  const [data, setData] = useState<DataTypes>({
    mealType: '',
    foodItem: '',
    calories: 0,
    date: new Date(),
  });
  const [isLoading, setLoading] = useState(false); // State for loading indicator
  const [error, setError] = useState<string | null>(null); // State for error handling

  const getList = async () => {
    try {
         await axios.get('/api/getlist');
    } catch (error) {
        setError('Failed to fetch user meals');
        console.error('Error fetching user meals:', error);
    } finally {
        setLoading(false);
    }
}

  const handleDateTimeChange = (date: any) => {
    setData({...data, date: date});
  };

   

  const handleMeal = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true when request is in progress
    setError(null); // Clear any previous errors

    try {
      await axios.post('/api/postCalories', {data}).then(() => toast.success('Added A Meal To Your Log'));
      const d = await axios.get('/api/getlist');
      dispatch(setUsersMeals(d?.data?.usersList))
      setData({
        mealType: '',
        foodItem: '',
        calories: 0,
        date: null,
      });
      setOpen(false);
    } catch (error: any) {
      console.log(error)
      if (error.response.status === 500) {
        toast.error('A calorie intake record already exists for this date');
      } else {
        setError('Something went wrong when trying to add meal to database');
      }
      console.error('Error adding meal to database:', error);
    } finally {
      setLoading(false); // Reset loading state when request is completed
    }
  };

  console.log(data);

  return (
    <div className='w-full h-32 relative border p-4 border-b-2 border-zinc-900 shadow-md shadow-zinc-900 flex justify-between items-center'>
      {isOpen &&  
        <CalForm 
          onDateChange={handleDateTimeChange} 
          initialDate={data.date} 
          onSubmit={handleMeal} 
          caloriesValue={data.calories} 
          caloriesOnChange={(e: any) => setData({...data, calories: e.target.value})} 
          foodValue={data.foodItem} 
          foodOnChange={(e: any) => setData({...data, foodItem: e.target.value})} 
          selectValue={data.mealType} 
          selectOnChange={(e: any) => setData({...data, mealType: e.target.value})} 
          CancelBtnOnClick={() => setOpen(false)} 
        />
      }
      <h1 className='text-5xl font-bold tracking-wide'>Your Calorie Tracker</h1>
      <button onClick={() => setOpen(true)} className='px-2.5 text-white py-3 w-[20%] text-2xl font-light text-center rounded-xl bg-slate-900'>Add Meal</button>
      {isLoading && <p>Loading...</p>} {/* Show loading indicator if request is in progress */}
      {error && <p>Error: {error}</p>} {/* Show error message if request fails */}
    </div>
  )
}
