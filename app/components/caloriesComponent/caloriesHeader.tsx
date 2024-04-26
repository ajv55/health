'use client';
import {ChangeEvent, useState} from 'react';
import CalForm from './calForm';

type DataTypes = {
  mealType?: string,
  foodItem: string,
  calories: number,
  date: Date | null,
}

export default function CaloriesHeader() {

  const [isOpen, setOpen] = useState(false);
  const [data, setData] = useState<DataTypes>({
    mealType: '',
    foodItem: '',
    calories: 0,
    date: new Date()
  });

  const handleDateTimeChange = (date: Date | null) => {
    console.log(date)
    setData({...data, date: date});
  };

  const handleMeal = async (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
    // post the meal with the calories to the database accord to the user logged in 
    console.log(data)

    setData({
      mealType: '',
      foodItem: '',
      calories: 0,
      date: null
    })
    setOpen(false)
  }

  


  return (
    <div className='w-full h-32 relative border p-4 border-b-2 border-zinc-900 shadow-md shadow-zinc-900 flex justify-between items-center'>
      {isOpen &&  <CalForm onDateChange={handleDateTimeChange} initialDate={data.date} onSubmit={handleMeal} caloriesValue={data.calories} caloriesOnChange={(e: any) => setData({...data, calories: e.target.value})} foodValue={data.foodItem} foodOnChange={(e: any) => setData({...data, foodItem: e.target.value})} selectValue={data.mealType} selectOnChange={(e: any) => setData({...data, mealType: e.target.value})} CancelBtnOnClick={() => setOpen(false)} />}
        <h1 className='text-5xl font-bold tracking-wide'>Your Calorie Tracker</h1>
        <button onClick={() => setOpen(true)} className='px-2.5 text-white py-3 w-[20%] text-2xl font-light text-center rounded-xl bg-slate-900'>Add Meal</button>
    </div>
  )
}
