'use client';
import {ChangeEvent, useEffect, useState} from 'react';
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
  time?: string,
  fruit?: any,
  meat?: any,
  vegetable?: any,
  drink?: any,
  carb?: any,
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
    fruit: '', 
    meat: '',
    vegetable: '',
    drink: '',
    carb: '',
  });


  const [isLoading, setLoading] = useState(false); // State for loading indicator
  const [error, setError] = useState<string | null>(null); // State for error handling


  const [fruitsData, setFruitsData] = useState<any>([]);
  const [meatsData, setMeatsData] = useState([]);
  const [vegetableData, setVegetableData] = useState([]);
  const [drinkData, setDrinkData] = useState([]);
  const [carbData, setCarbData] = useState([]);


  

  

    const getMeats = async () => {
      return await axios.get('/api/getMeat').then((res) => setMeatsData(res?.data?.cleanup?.meats))
  }

    const getFruits = async () => {
        return await axios.get('/api/getFruit').then((res) => setFruitsData(res?.data?.cleanup?.fruits))
    }

    const getVegetables = async () => {
      return await axios.get('/api/getVegetable').then((res) => setVegetableData(res?.data?.veg?.vegetables))
    }

    const getDrink = async () => {
      return await axios.get('/api/getDrink').then((res) => setDrinkData(res?.data?.drink?.drinks))
    }

    const getCarbs = async () => {
      return await axios.get('/api/getCarb').then((res) => setCarbData(res?.data?.carbs?.carbs))
    }
    


    useEffect(() => {
        getFruits();
        getMeats();
        getVegetables(); 
        getDrink();
        getCarbs();
      
    }, [])



  const handleDateTimeChange = (date: any) => {
    setData({...data, date: date});
  };


  const handleChoosenFruit = (e: any) => {
    fruitsData.map((fd: any) => {
      if(e.target.value === fd.name){
        setData({...data, fruit: fd})
      }
    })
    
  }

  const handleMeat = (e: any) => {
    meatsData.map((md: any) => {
      if(e.target.value === md.name){
        setData({...data, meat: md})
      }
    })
    
  }

  const handleVegetable = (e: any) => {
    vegetableData.map((vd: any) => {
      if(e.target.value === vd.name){
        setData({...data, vegetable: vd})
      }
    })
    
  }

  const handleDrink = (e: any) => {
    drinkData.map((dd: any) => {
      if(e.target.value === dd.name){
        setData({...data, drink: dd})
      }
    })
    
  }

  const handleCarb = (e: any) => {
    carbData.map((cd: any) => {
      if(e.target.value === cd.name){
        setData({...data, carb: cd})
      }
    })
    
  }
   

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
        vegetable: '',
        meat: '', 
        fruit: '',
        drink: '',
        carb: '',
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
          selectMeat={data.meat}
          selectCarb={data.carb}
          carbData={carbData}
          carbOnChange={handleCarb}
          selectDrink={data.drink}
          drinkData={drinkData}
          drinkOnChange={handleDrink}
          vegetableOnChange={handleVegetable}
          selectVegetable={data.vegetable}
          vegetablesData={vegetableData}
          meatOnChange={handleMeat}
          meatsData={meatsData}
          selectfruit={data.fruit}
          fruitOnChange={(e: any) => handleChoosenFruit(e)}
          fruitsData={fruitsData}
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
