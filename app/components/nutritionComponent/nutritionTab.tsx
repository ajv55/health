'use client';
import React, { useEffect, useState } from 'react'
import Macro from './macro';
import Lunch from './day1';
import axios from 'axios';
import { useSelector , useDispatch} from 'react-redux';
import { setNutritionList, setIsLoading } from '@/app/slices/nutritionSlice';
import Day1 from './day1';
import { RootState } from '@/app/store';
import DaysSkeleton from './daysSkeleton';
import Day2 from './day2';
import Day3 from './day3';
import Day4 from './day4';
import Day5 from './day5';
import Day6 from './day6';
import Day7 from './day7';

export default function NutritionTab() {

    const [activeTab, setActiveTab] = useState('day_1');
    const nutritionIsLoading = useSelector((state: RootState) => state.nutrition.isLoading);
    const dispatch = useDispatch();

    const getNutrition = async () => {
        dispatch(setIsLoading(true))
        await axios.get('/api/nutrition').then((res) => dispatch(setNutritionList(res?.data?.data?.nutrition_guide))).finally(() => dispatch(setIsLoading(false)))
    }

    useEffect(() => {
        getNutrition();
    }, [])

    const handleTabClick = (tabId: string) => {
        console.log(tabId)
        setActiveTab(tabId);
    };


  return (
    

    <div className='w-full h-screen  flex flex-col justify-between items-center'>
        <div className='w-full h-24 flex justify-center items-center  p-3'>
            <h1 className='text-6xl font-bold tracking-wide drop-shadow-xl p-2 border-b-2  border-zinc-900 '>Simple 7 Day Meal Plan</h1>
        </div>
        <div className="mb-4 w-full  relative  border-b border-gray-200 dark:border-gray-700">
        <ul className="flex  flex-wrap bg-slate-200 justify-evenly items-center  -mb-px text-lg  tracking-wide font-semibold text-center" id="default-styled-tab" data-tabs-toggle="#default-styled-tab-content" data-tabs-active-classNamees="text-purple-600 hover:text-purple-300 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500" data-tabs-inactive-classNamees="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300" role="tablist">
            <li className="me-2" role="presentation">
                <button aria-controls="day_1" aria-selected={activeTab === 'day_1' ? 'true' : 'false'} onClick={() => handleTabClick('day_1')} className={`${activeTab === 'day_1' && 'border-teal-300'} inline-block p-4 border-b-2 rounded-t-lg hover:text-teal-400 hover:border-gray-300  dark:hover:text-gray-300`} id="profile-styled-tab" data-tabs-target="#styled-profile" type="button" role="tab" >Day 1</button>
            </li>
            <li className="me-2" role="presentation">
                <button aria-controls="day_2" aria-selected={activeTab === 'day_2' ? 'true' : 'false'} onClick={() => handleTabClick('day_2')} className={`${activeTab === 'day_2' && 'border-teal-300'} inline-block p-4 border-b-2 rounded-t-lg hover:text-teal-400 hover:border-gray-300  dark:hover:text-gray-300`} id="dashboard-styled-tab" data-tabs-target="#styled-dashboard" type="button" role="tab"  >Day 2</button>
            </li>
            <li className="me-2" role="presentation">
                <button aria-controls="day_3" aria-selected={activeTab === 'day_3' ? 'true' : 'false'} onClick={() => handleTabClick('day_3')} className={`${activeTab === 'day_3' && 'border-teal-300'} inline-block p-4 border-b-2 rounded-t-lg hover:text-teal-400 hover:border-gray-300  dark:hover:text-gray-300`} id="settings-styled-tab" data-tabs-target="#styled-settings" type="button" role="tab" >Day 3</button>
            </li>
            <li className="me-2" role="presentation">
                <button aria-controls="day_4" aria-selected={activeTab === 'day_4' ? 'true' : 'false'} onClick={() => handleTabClick('day_4')} className={`${activeTab === 'day_4' && 'border-teal-300'} inline-block p-4 border-b-2 rounded-t-lg hover:text-teal-400 hover:border-gray-300  dark:hover:text-gray-300`} id="settings-styled-tab" data-tabs-target="#styled-settings" type="button" role="tab" >Day 4</button>
            </li>
            <li className="me-2" role="presentation">
                <button aria-controls="day_5" aria-selected={activeTab === 'day_5' ? 'true' : 'false'} onClick={() => handleTabClick('day_5')} className={`${activeTab === 'day_5' && 'border-teal-300'} inline-block p-4 border-b-2 rounded-t-lg hover:text-teal-400 hover:border-gray-300  dark:hover:text-gray-300`} id="settings-styled-tab" data-tabs-target="#styled-settings" type="button" role="tab" >Day 5</button>
            </li>
            <li className="me-2" role="presentation">
                <button aria-controls="day_6" aria-selected={activeTab === 'day_6' ? 'true' : 'false'} onClick={() => handleTabClick('day_6')} className={`${activeTab === 'day_6' && 'border-teal-300'} inline-block p-4 border-b-2 rounded-t-lg hover:text-teal-400 hover:border-gray-300  dark:hover:text-gray-300`} id="settings-styled-tab" data-tabs-target="#styled-settings" type="button" role="tab" >Day 6</button>
            </li>
            <li className="me-2" role="presentation">
                <button aria-controls="day_7" aria-selected={activeTab === 'day_7' ? 'true' : 'false'} onClick={() => handleTabClick('day_7')} className={`${activeTab === 'day_7' && 'border-teal-300'} inline-block p-4 border-b-2 rounded-t-lg hover:text-teal-400 hover:border-gray-300  dark:hover:text-gray-300`} id="settings-styled-tab" data-tabs-target="#styled-settings" type="button" role="tab" >Day 7</button>
            </li>
        </ul>
        {nutritionIsLoading && <DaysSkeleton />}
        {activeTab === 'day_1' && <Day1 />}
        {activeTab === 'day_2' && <Day2 />}
        {activeTab === 'day_3' && <Day3 />}
        {activeTab === 'day_4' && <Day4 />}
        {activeTab === 'day_5' && <Day5 />}
        {activeTab === 'day_6' && <Day6 />}
        {activeTab === 'day_7' && <Day7 />}
    </div>
    </div>

  )
}
