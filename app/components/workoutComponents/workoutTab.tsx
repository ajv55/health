'use client';
import { useEffect, useState } from 'react';
import style from '@/app/style.module.css'
import { useSearchParams } from 'next/navigation';
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from 'next/link';
import WorkoutSearch from './workoutSearch';
import ExerciseAnalytics from './exerciseAnalytic';
import Catalog from './catalog';
import Recent from './recent';
import CustomList from './customList';


const WorkoutTab = () => {
  const [activeTab, setActiveTab] = useState('summary');

  const searchParams = useSearchParams();
  const tab = searchParams.get('tab');


  useEffect(() => {
    if(tab === 'search'){
      setActiveTab('search')
    }
    if(tab === 'exerciseAnalytic'){
      setActiveTab('exerciseAnalytic')
    }
    if(tab === 'exerciseCatalog'){
      setActiveTab('exerciseCatalog')
    }
    if(tab === 'customExercises'){
      setActiveTab('customExercises')
    }
  }, [tab])

  const tabs = [
    { name: 'Search', key: 'search' },
    { name: 'Exercise Catalog', key: 'exerciseCatalog' },
    { name: 'My Recent Exercises', key: 'recentExercises' },
    { name: 'My Custom Exercises', key: 'customExercises' },
    { name: 'Exercise Analytic', key: 'exerciseAnalytic' },
  ];

  return (
    <div className=''> 
      <div className="flex bg-gray-50  border-b border-indigo-500">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`py-2 text-lg px-4 ${activeTab === tab.key ? 'border-b-2 border-indigo-500 text-indigo-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.name}
          </button>
        ))}
      </div>
     <div className='w-full flex justify-between items-center '>
     <Link href='/dashboard/workout' className='w-64 flex justify-start p-3 gap-1 items-center'>
        <IoIosArrowRoundBack size={40} className='text-indigo-600' />
        <h2 className='text-xl text-indigo-600'>Back To Log</h2>
      </Link>
      {activeTab === 'customExercises' && <Link href='/dashboard/workout/search/customExercise' className='p-2 mr-2 text-indigo-500 text-2xl hover:bg-indigo-100 rounded-lg'>Create Custom Log</Link>}
     </div>
      <div className="p-4  h-[40rem]  overflow-scroll ">
        {activeTab === 'search' && <WorkoutSearch />}
        {activeTab === 'exerciseCatalog' && <Catalog />}
        {activeTab === 'recentExercises' && <Recent />}
        {activeTab === 'customExercises' && <CustomList />}
        {activeTab === 'exerciseAnalytic' && <ExerciseAnalytics />}
      </div>
    </div>
  );
};

export default WorkoutTab;