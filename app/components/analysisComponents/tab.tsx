'use client';
import { useEffect, useState } from 'react';
import Summary from './summary';
import { useSearchParams } from 'next/navigation';
import MyAdvice from './myAdvice';
import CaloriesAnalysis from './caloriesAnalysis';
import MealAnalysis from './mealAnalysis';
import WeightChart from './weightChart';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('summary');

  const searchParams = useSearchParams();
  const tab = searchParams.get('tab');

  console.log(tab);

  useEffect(() => {
    if(tab === 'advice'){
      setActiveTab('advice')
    }
  }, [tab])

  const tabs = [
    { name: 'Summary & Foods', key: 'summary' },
    { name: 'Weight Loss', key: 'weightLoss' },
    { name: 'Meal Analysis', key: 'mealAnalysis' },
    { name: 'Cals from Nutrients', key: 'calsFromNutrients' },
    { name: 'My Advice', key: 'advice' },
  ];

  return (
    <div className=' '>
      <div className="flex  w-full border-b border-indigo-500">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`py-2 px-4 ${activeTab === tab.key ? 'border-b-2 border-indigo-500 text-indigo-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="p-4  h-[40rem]  overflow-scroll ">
        {activeTab === 'summary' && <Summary />}
        {activeTab === 'weightLoss' && <WeightChart />}
        {activeTab === 'mealAnalysis' && <MealAnalysis />}
        {activeTab === 'calsFromNutrients' && <CaloriesAnalysis />}
        <div className=''>
          {activeTab === 'advice' && <MyAdvice />}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
