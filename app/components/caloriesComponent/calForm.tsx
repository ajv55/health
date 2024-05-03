'use client';
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import MyDateTimePicker from "./date"
import axios from "axios";

type CalFormProps = {
    CancelBtnOnClick?: () => void,
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    selectValue?: string,
    selectOnChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    foodValue?: string,
    foodOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void ,
    caloriesValue?: number,
    caloriesOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    initialDate?: Date | null, // Rename selectedDate to initialDate
    onDateChange?:  (date: Date | null) => void,
    selectfruit?: string,
    fruitOnChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    fruitsData?: string[],
    meatsData?: string[],
    selectMeat?: string,
    meatOnChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    selectVegetable?: string,
    vegetablesData?: string[],
    vegetableOnChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    selectDrink?: string,
    drinkData?: string[],
    drinkOnChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    selectCarb?: string,
    carbData?: string[],
    carbOnChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void,


}

export default function CalForm({CancelBtnOnClick, selectCarb, carbData, carbOnChange, selectDrink, drinkData, drinkOnChange, selectVegetable, vegetablesData, vegetableOnChange, selectMeat, selectValue, meatsData , selectOnChange, meatOnChange, foodValue, foodOnChange, caloriesValue, caloriesOnChange, onSubmit, initialDate, onDateChange, selectfruit, fruitsData, fruitOnChange}: CalFormProps) {


  return (
    <div className='w-full absolute bg-transparent z-30 top-0 left-0 backdrop-blur-sm h-screen flex  justify-center items-center'>
        
        <form onSubmit={onSubmit} className='w-[45%] h-content bg-slate-100 drop-shadow-2xl rounded-2xl flex flex-col justify-start p-3 gap-4 items-center'>
        <div className="w-full flex flex-col justify-start items-start px-4 py-2">
            <h1 className="text-4xl font-bold tracking-wide">Calorie Tracker</h1>
            <h5 className="text-xl font-light tracking-wider text-zinc-500">Log your meals and track your calories.</h5>
        </div>

        <div className="w-full flex justify-evenly items-center">
            <div className="flex w-[35%] flex-col justify-start items-start">
                <label htmlFor="small" className="block mb-1 w-full text-xl font-bold  dark:text-white">Meal Type</label>
                <select required defaultValue={selectValue} onChange={selectOnChange}  id="small"  className="block w-full px-3 py-2 drop-shadow-md border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300">
                    <option disabled value="">Choose a meal type</option> 
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                </select>
            </div>
            <div className="w-[35%] flex flex-col justify-start items-center">
                <label htmlFor="small" className="block mb-1 w-full text-xl font-bold  dark:text-white">Drinks <span className="text-xs text-zinc-500 font-medium tracking-wider ">&#40; Optional &#41;</span></label>
                <select  defaultValue={selectDrink} onChange={drinkOnChange}  id="small"  className="block w-full px-3 py-2 drop-shadow-md border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300">
                    <option disabled value="">Choose A Drink</option> 
                    {drinkData?.map((fd: any, i: number) => <option value={fd.name}  key={i}>{fd?.name} {fd?.servingSize}</option>)}
                </select>
            </div>
        </div>
        
        <div className=" w-full flex  justify-evenly items-center">
            <div className="flex w-[35%] flex-col justify-start items-start">
                <label htmlFor="small" className="block mb-1 w-full text-xl font-bold  dark:text-white">Meats</label>
                <select required defaultValue={selectMeat} onChange={meatOnChange}  id="small"  className="block  w-full px-3 py-2 drop-shadow-md border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300">
                    <option disabled value="">Choose A Meat</option> 
                    {meatsData?.map((fd: any, i: number) => <option value={fd.name}  key={i}>{fd?.name} {fd?.servingSize}</option>)}
                </select>
            </div>
            <div className="flex w-[35%] flex-col justify-start items-start">
                <label htmlFor="small" className="block mb-1 w-full text-xl font-bold  dark:text-white">Fruits <span className="text-xs text-zinc-500 font-medium tracking-wider ">&#40; Optional &#41;</span></label>
                <select  defaultValue={selectfruit} onChange={fruitOnChange}  id="small"  className="block w-full px-3 py-2 drop-shadow-md border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300">
                    <option disabled value="">Choose Fruit </option> 
                    {fruitsData?.map((fd: any, i: number) => <option value={fd.name}  key={i}>{fd?.name} {fd?.servingSize}</option>)}
                </select>
            </div>
        </div>
        
        <div className=" w-full flex justify-evenly items-center">
            <div className="flex w-[35%] flex-col justify-start items-start">
                <label htmlFor="small" className="block mb-1 w-full text-xl font-bold  dark:text-white">Vegetables <span className="text-xs text-zinc-500 font-medium tracking-wider ">&#40; Optional &#41;</span></label>
                <select defaultValue={selectVegetable} onChange={vegetableOnChange}  id="small"  className="block w-full px-3 py-2 drop-shadow-md border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300">
                    <option disabled value="">Choose Vegetables </option> 
                    {vegetablesData?.map((fd: any, i: number) => <option value={fd.name}  key={i}>{fd?.name} {fd?.servingSize}</option>)}
                </select>
            </div>
            <div className="flex w-[35%] flex-col justify-start items-start">
                <label htmlFor="small" className="block mb-1 w-full text-xl font-bold  dark:text-white">Common Source Of Carbs <span className="text-xs text-zinc-500 font-medium tracking-wider ">&#40; Optional &#41;</span></label>
                <select defaultValue={selectCarb} onChange={carbOnChange}  id="small"  className="block w-full px-3 py-2 drop-shadow-md border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300">
                    <option disabled value="">Choose A Type Of Carb </option> 
                    {carbData?.map((fd: any, i: number) => <option value={fd.name}  key={i}>{fd?.name} {fd?.servingSize}</option>)}
                </select>
            </div>
        </div>
        <div className="w-full flex justify-evenly items-center">
            <div className="w-[45%]">
            <label className="w-full text-xl font-bold" htmlFor="food">Custom Food Item <span className="text-xs text-zinc-500 font-medium tracking-wider ">&#40; Optional &#41;</span></label>
            <input value={foodValue} onChange={foodOnChange} className="block w-full px-3 py-2 border drop-shadow-md border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" id="food" type="text"  />
            </div>
            <div className="w-[45%]">
                <label className="block text-xl font-bold  dark:text-gray-300" htmlFor="calories">Calories <span className="text-xs text-zinc-500 font-medium tracking-wider ">&#40; Optional &#41;</span></label>
                <input 
                value={caloriesValue} 
                onChange={caloriesOnChange}
                className="block w-full px-3 py-2 border drop-shadow-md border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                id="calories"
                placeholder="Enter calories"
                type="number"
                />
            </div>
        </div>
        <MyDateTimePicker  initialDate={initialDate} onDateChange={onDateChange} />
        <button type='submit' className="w-full inline-flex mt-5 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white hover:text-black bg-indigo-600 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600">Log Meal</button>
        <button onClick={CancelBtnOnClick} className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-indigo-400 hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600" type="submit">Cancel</button>
        </form>

    </div>
  )
}
