'use client';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { useSearchParams } from 'next/navigation';
import { format } from 'date-fns';
import Percentages from '@/app/components/tabComponents/percentages';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import RelatedModal from '@/app/components/tabComponents/relatedModal';
import { useRouter } from 'next/navigation';
import FatInfo from '@/app/components/tabComponents/fatInfo';
import ProteinInfo from '@/app/components/tabComponents/proteinInfo';
import CarbInfo from '@/app/components/tabComponents/carbsInfo';
import NutrientTargets from '@/app/components/tabComponents/nutrientTarget';

const Page = () => {

  const searchParams = useSearchParams();
  const tab = searchParams.get('tab')
  const router = useRouter();

  console.log(tab);

  useEffect(() => {
    if(tab === 'Weight Loss Paths') {
      setActiveTab('Weight Loss Paths')
    } else {
      setActiveTab('Weight & Calories')
    }
    if(tab === 'Nutrient Targets'){
        setActiveTab('Nutrient Targets')
    }
  }, [tab])

    const [activeTab, setActiveTab] = useState('Weight & Calories');
    const [relatedModal, setRelatedModal] = useState(false);
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

    console.log(relatedModal);

 
    const tabs = [
        'Weight & Calories',
        'Weight Loss Paths',
        'Carbs, Protein & Fat',
        'Exercise Plan',
        'Nutrient Targets',
    ];

    return (
        <div className=" w-full  min-h-screen overflow-scroll  bg-gray-100 p-6">
            <div className="max-w-8xl h-content   mx-auto bg-white rounded-lg shadow-md ">
                <nav className="flex border-b-2 p-2 bg-white border-indigo-600 mb-6">
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
                <div className=' w-full'>
                    {activeTab === 'Weight & Calories' && (
                        <div className="w-full h-auto p-6 relative bg-gray-100 mt-5 rounded-lg shadow-lg">
                            <AnimatePresence>{relatedModal && <RelatedModal proteinOnClick={() => {setActiveTab('Carbs, Protein & Fat'), setRelatedModal(false)} } onClose={() => setRelatedModal(false)} />}</AnimatePresence>
                        <div className="w-full flex justify-between items-center mb-6">
                            <h1 className="text-2xl font-light tracking-wide">I plan to lose <span className="text-2xl font-medium text-indigo-600">22 lb </span>in <span className="text-indigo-600 text-2xl font-medium">{days} days </span>by eating less than <span className="text-indigo-600 font-medium text-2xl">{rec} cals </span>daily.</h1>
                            <span className="text-md font-light tracking-wider text-gray-500">
                                Maintenance <span className="text-indigo-500 font-medium text-2xl">{maintenance}</span>
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
                                Weigh-In
                            </button>
                        </div>
                        <div className='w-full h-10 flex justify-between items-center '>
                            <button onClick={() => setRelatedModal(true)} className=' text-indigo-400 hover:cursor-pointer hover:text-indigo-600 hover:bg-indigo-300 hover:rounded-md p-2 hover:bg-opacity-50' >RELATED NUTRIENTS</button>
                            <Link className=' text-indigo-400 hover:cursor-pointer hover:text-indigo-600 hover:bg-indigo-300 hover:rounded-md p-2 hover:bg-opacity-50' href='/planning'>READ ARTICLE</Link>
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
                        <div className='w-full flex flex-col justify-center items-center gap-5'>
                            <Percentages />
                            <FatInfo />
                            <ProteinInfo />
                            <CarbInfo />
                        </div>
                    )}
                    {activeTab === 'Exercise Plan' && (
                        <div>
                            <h1 className="text-xl font-semibold mb-4">Exercise Plan</h1>
                            <p>Details for Exercise Plan.</p>
                        </div>
                    )}
                    {activeTab === 'Nutrient Targets' && (
                        <div className='w-full h-[36rem]'>
                            <NutrientTargets />
                        </div>
                    )}
                   
                </div>
            </div>
        </div>
    );
};

export default Page;
