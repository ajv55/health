'use client';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { useSearchParams } from 'next/navigation';
import { format } from 'date-fns';

const Page = () => {

  const searchParams = useSearchParams();
  const tab = searchParams.get('tab')

  console.log(tab);

  useEffect(() => {
    if(tab === 'Weight Loss Paths') {
      setActiveTab('Weight Loss Paths')
    } else {
      setActiveTab('Weight & Calories')
    }
  }, [tab])

    const [activeTab, setActiveTab] = useState('Weight & Calories');
    const {data: session} = useSession();

    const userWeight = Number(session?.user.weight);
    const goal = Number(session?.user.goal);
    const maintenance = Number(session?.user.calories)

    const recommend = maintenance - 300;
    const rec = session?.user.recommend

    const days = useSelector((state: RootState) => state.weight.daysToLoseWeight);
    const week = useSelector((state: RootState) => state.weight.weeks) ?? new Date();

   

    // Ensure `week` is a Date object
    const endDate = week ? new Date(week) : new Date();

    // Format the end date
    const newDate = format(endDate, 'MMMM d, yyyy');

    console.log('new Date: ', newDate);

 
    const tabs = [
        'Weight & Calories',
        'Weight Loss Paths',
        'Carbs, Protein & Fat',
        'Exercise Plan',
        'Nutrient Targets',
    ];

    return (
        <div className=" w-full min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
                <nav className="flex space-x-4 border-b-2 border-indigo-600 mb-6">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`py-2 px-4 text-indigo-600 ${
                                activeTab === tab
                                    ? 'border-b-2 text-xl bg-indigo-100 rounded-md border-indigo-600'
                                    : ''
                            }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>
                <div>
                    {activeTab === 'Weight & Calories' && (
                        <div className="w-full h-auto p-6 bg-gray-50 rounded-lg shadow-lg">
                        <div className="w-full flex justify-between items-center mb-6">
                            <h1 className="text-2xl font-light tracking-wide">I plan to lose <span className="text-2xl font-medium text-indigo-600">22 lb </span>in <span className="text-indigo-600 text-2xl font-medium">{days} days </span>by eating less than <span className="text-indigo-600 font-medium text-2xl">{rec} cals </span>daily.</h1>
                            <span className="text-md font-light tracking-wider text-gray-500">
                                Maintenance <span className="text-indigo-600 font-medium text-2xl">{maintenance}</span>
                            </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="w-full  border border-indigo-200 p-4 rounded-lg bg-white hover:shadow-md hover:shadow-indigo-300 transition-shadow">
                                <p className="mb-2 text-indigo-400 flex flex-col justify-center items-center text-2xl"><span className='text-gray-500 text-lg'>Current Weight</span> {userWeight} lb</p>
                                <p className="mb-2 text-indigo-400 flex flex-col justify-center items-center text-2xl"><span className='text-gray-500 text-lg'>Target Weight</span> {goal} lb</p>
                                <p className='flex text-indigo-400 flex-col justify-center items-center text-2xl'><span className='text-gray-500 text-lg'>Target Date</span> {newDate}</p>
                            </div>
                            <div className="w-full border flex flex-col justify-center items-center border-indigo-200 p-4 rounded-lg bg-white hover:shadow-md hover:shadow-indigo-300 transition-shadow">
                                <p className="mb-2 flex flex-col justify-center items-center text-xl"><strong className=' text-indigo-400'>Daily Food Calorie Budget</strong> {rec}</p>
                                <p className="text-gray-500">We recommends {rec} calories based on your weight target.</p>
                            </div>
                        </div>
                        <div className="mt-6 text-center">
                            <button className="bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition-colors">
                                Get Personalized Plan
                            </button>
                        </div>
                    </div>
                    
                    )}
                     {activeTab === 'Weight Loss Paths' && (
                        <div>
                            <h1 className="text-xl font-semibold mb-4">Cycling</h1>
                            <p>Details for Cycling.</p>
                        </div>
                    )}
                    {activeTab === 'Carbs, Protein & Fat' && (
                        <div>
                            <h1 className="text-xl font-semibold mb-4">Carbs, Protein & Fat</h1>
                            <p>Details for Carbs, Protein & Fat.</p>
                        </div>
                    )}
                    {activeTab === 'Exercise Plan' && (
                        <div>
                            <h1 className="text-xl font-semibold mb-4">Exercise Plan</h1>
                            <p>Details for Exercise Plan.</p>
                        </div>
                    )}
                    {activeTab === 'Nutrient Targets' && (
                        <div>
                            <h1 className="text-xl font-semibold mb-4">Nutrient Targets</h1>
                            <p>Details for Nutrient Targets.</p>
                        </div>
                    )}
                   
                </div>
            </div>
        </div>
    );
};

export default Page;
