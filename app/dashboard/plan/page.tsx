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
import ImpactPathChart from '@/app/components/tabComponents/impactPath';
import CalorieImpactPaths from '@/app/components/tabComponents/caloriesImpactPath';

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
        'Nutrient Targets',
    ];

    return (
        <div className=" w-full  min-h-screen overflow-scroll  bg-gray-100 lg:p-6 p-3">
            <div className="max-w-8xl h-content   mx-auto bg-white rounded-lg shadow-md ">
                <nav className="flex border-b-2 p-2 overflow-x-scroll bg-white border-indigo-600 mb-6">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`py-2 px-4 text-indigo-600 ${
                                activeTab === tab
                                    ? 'border-b-2  bg-indigo-100 rounded-md border-indigo-600'
                                    : ''
                            }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>
                <div className=' w-full overflow-scroll flex justify-center items-center'>
                    {activeTab === 'Weight & Calories' && (
                        <div className='w-full lg:h-[36rem] h-full flex justify-center items-center'>
                                <div className="lg:w-[85%] w-[95%] h-auto p-6 relative ring-1 ring-indigo-300 bg-gray-100 mt-5 mb-10 lg:mb-0  rounded-lg shadow-lg">
                                <AnimatePresence>{relatedModal && <RelatedModal proteinOnClick={() => {setActiveTab('Carbs, Protein & Fat'), setRelatedModal(false)} } onClose={() => setRelatedModal(false)} />}</AnimatePresence>
                            <div className="w-full flex lg:flex-row flex-col justify-between items-center mb-6">
                                <h1 className="lg:text-2xl text-xl  font-light tracking-wide">I plan to lose <span className="text-2xl font-medium text-indigo-600">22 lb </span>in <span className="text-indigo-600 text-2xl font-medium">{days} days </span>by eating less than <span className="text-indigo-600 font-medium text-2xl">{rec} cals </span>daily.</h1>
                                <span className="text-md font-light tracking-wider text-gray-500">
                                    Maintenance <span className="text-indigo-500 font-medium text-2xl">{maintenance || 0}</span>
                                </span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="w-full  border border-indigo-200 p-4 rounded-lg bg-white hover:shadow-md hover:shadow-indigo-300 transition-shadow">
                                    <p className="mb-2 text-indigo-400 flex flex-col justify-center items-center text-2xl"><span className='text-gray-500 text-lg'>Current Weight</span> {userWeight || 0} lb</p>
                                    <p className="mb-2 text-indigo-400 flex flex-col justify-center items-center text-2xl"><span className='text-gray-500 text-lg'>Target Weight</span> {goal || 0} lb</p>
                                    <p className='flex text-indigo-400 flex-col justify-center items-center text-2xl'><span className='text-gray-500 text-lg'>Target Date</span> {newDate}</p>
                                </div>
                                <div className="w-full border flex flex-col justify-center items-center border-indigo-200 p-4 rounded-lg bg-white hover:shadow-md hover:shadow-indigo-300 transition-shadow">
                                    <p className="mb-2 flex flex-col justify-center items-center text-xl"><strong className=' text-indigo-400'>Daily Food Calorie Budget</strong> {rec}</p>
                                    <p className="text-gray-500">We recommends {rec || 0} calories based on your weight target.</p>
                                </div>
                            </div>
                            <div className='w-full h-10 lg:mt-8 mt-8 flex justify-between items-center '>
                                <button onClick={() => setRelatedModal(true)} className=' text-indigo-400 hover:cursor-pointer hover:text-indigo-600 hover:bg-indigo-300 hover:rounded-md p-2 hover:bg-opacity-50' >RELATED NUTRIENTS</button>
                                <Link className=' text-indigo-400 hover:cursor-pointer hover:text-indigo-600 hover:bg-indigo-300 hover:rounded-md p-2 hover:bg-opacity-50' href='/planning'>READ ARTICLE</Link>
                            </div>
                        </div>
                        </div>
                    
                    )}
                     {activeTab === 'Weight Loss Paths' && (
                        <div>
                            <CalorieImpactPaths maintenanceCalories={maintenance} />
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
                    {activeTab === 'Nutrient Targets' && (
                        <div className='w-full overflow-scroll h-[40rem]'>
                            <NutrientTargets />
                        </div>
                    )}
                   
                </div>
            </div>
        </div>
    );
};

export default Page;
