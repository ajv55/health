'use client';
import React, { useEffect, useState } from 'react'
import Macro from './macro';
import Lunch from './lunch';
import axios from 'axios';
import { useSelector , useDispatch} from 'react-redux';
import { setNutritionList } from '@/app/slices/nutritionSlice';

export default function NutritionTab() {

    const [activeTab, setActiveTab] = useState('breakfast');
    const dispatch = useDispatch();

    const getNutrition = async () => {
        await axios.get('/api/nutrition').then((res) => dispatch(setNutritionList(res?.data?.data?.nutrition_guide)))
    }

    useEffect(() => {
        getNutrition();
    }, [])

    const handleTabClick = (tabId: string) => {
        console.log(tabId)
        setActiveTab(tabId);
    };


  return (
    

    <div className='w-full border-4 border-red-400 flex justify-between items-center'>
        <div className="mb-4 w-[80%] border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap bg-slate-200 justify-evenly items-center  -mb-px text-lg  tracking-wide font-semibold text-center" id="default-styled-tab" data-tabs-toggle="#default-styled-tab-content" data-tabs-active-classNamees="text-purple-600 hover:text-purple-300 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500" data-tabs-inactive-classNamees="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300" role="tablist">
            <li className="me-2" role="presentation">
                <button aria-controls="breakfast" aria-selected={activeTab === 'breakfast' ? 'true' : 'false'} onClick={() => handleTabClick('breakfast')} className={`${activeTab === 'breakfast' && 'border-teal-300'} inline-block p-4 border-b-2 rounded-t-lg hover:text-teal-400 hover:border-gray-300  dark:hover:text-gray-300`} id="profile-styled-tab" data-tabs-target="#styled-profile" type="button" role="tab" >Breakfast</button>
            </li>
            <li className="me-2" role="presentation">
                <button aria-controls="lunch" aria-selected={activeTab === 'lunch' ? 'true' : 'false'} onClick={() => handleTabClick('lunch')} className={`${activeTab === 'lunch' && 'border-teal-300'} inline-block p-4 border-b-2 rounded-t-lg hover:text-teal-400 hover:border-gray-300  dark:hover:text-gray-300`} id="dashboard-styled-tab" data-tabs-target="#styled-dashboard" type="button" role="tab"  >Lunch</button>
            </li>
            <li className="me-2" role="presentation">
                <button aria-controls="dinner" aria-selected={activeTab === 'dinner' ? 'true' : 'false'} onClick={() => handleTabClick('dinner')} className={`${activeTab === 'dinner' && 'border-teal-300'} inline-block p-4 border-b-2 rounded-t-lg hover:text-teal-400 hover:border-gray-300  dark:hover:text-gray-300`} id="settings-styled-tab" data-tabs-target="#styled-settings" type="button" role="tab" >Dinner</button>
            </li>
        </ul>
        {activeTab === 'breakfast' && <Lunch />}
        {activeTab === 'lunch' && <div className='bg-orange-300 w-full h-[32rem]'></div>}
        {activeTab === 'dinner' && <div className='bg-purple-300 w-full h-[32rem]'></div>}
    </div>
    </div>

  )
}
