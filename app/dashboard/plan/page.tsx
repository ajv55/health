'use client';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { useSearchParams } from 'next/navigation';

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

    const days = useSelector((state: RootState) => state.weight.daysToLoseWeight);
    const week = useSelector((state: RootState) => state.weight.weeks) || new Date();

   

    const newDate = week?.toDateString();

    console.log('new Date: ', newDate);

 
    const tabs = [
        'Weight & Calories',
        'Weight Loss Paths',
        'Carbs, Protein & Fat',
        'Exercise Plan',
        'Nutrient Targets',
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
                <nav className="flex space-x-4 border-b-2 border-indigo-600 mb-6">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`py-2 px-4 text-indigo-600 ${
                                activeTab === tab
                                    ? 'border-b-2 border-indigo-600'
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
                        <div>
                            <h1 className="text-xl font-semibold mb-4">I plan to lose 22 lb in {days} days by eating less than {recommend} cals daily.</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className='w-full flex flex-col justify-start items-start'>
                                    <p><strong>Current Weight:</strong> {userWeight} lb</p>
                                    <p><strong>Target Weight:</strong> {goal} lb</p>
                                    <p><strong>Target Date:</strong> {newDate}</p>
                                </div>
                                <div>
                                    <p><strong>Daily Food Calorie Budget:</strong> 2,193</p>
                                    <p>MyNetDiary recommends 2,201 calories based on your weight target.</p>
                                </div>
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
