'use client';
import { useEffect, useState } from 'react';
import { format, addDays, startOfWeek } from 'date-fns';
import DatePicker from '../tabComponents/datePicker';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import axios from 'axios';
import {  setTodaysSteps } from '@/app/slices/logSlice';
import StepAnalysisModal from './stepAnalysisModal';
import { AnimatePresence } from 'framer-motion';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import DailyGoalModal from './dailyGoalModal';


const StepAnalysis = () => {
  const [steps, setSteps] = useState<any>(0);
  const [isDone, setIsDone] = useState<boolean>(false)
  const [stepAnalysisModal, setStepAnalysisModal] = useState<boolean>(false);
  const [dailyStepModal, setDailyStepModal] = useState<boolean>(false);
  const [goal, setGoal] = useState<number>(0)
  const currentDate = useSelector((state: RootState) => state.weight.currentDate);
  const formattedDate = format(currentDate!, 'MMM d');
  const [loading, setLoading] = useState<boolean>(false); 
  const dispatch = useDispatch();
  const todaysStep = useSelector((state: RootState) => state.log.todaysSteps);
  const {data: session, update} = useSession();
  const userIsActive = session?.user.isActive;
  const userDailyStepGoal = session?.user.dailyStepGoal;
  const router = useRouter();

  const logSteps = (index: number) => {
    const userSteps = prompt("Enter your steps:", steps[index].toString());
    if (userSteps) {
      const newSteps = [...steps];
      newSteps[index] = parseInt(userSteps, 10);
      setSteps(newSteps);
    }
  };

  const fetchSteps = async () => {
    setLoading(true);
    await axios.get(`/api/getSteps?currentDate=${currentDate}`).then((res: any) => {
      if(res.status === 201){
        dispatch(setTodaysSteps(res?.data?.totalSteps))
      }
    }).finally(() => {
      setLoading(false); 
    })
  };

  useEffect(() => {
    fetchSteps();
  }, [currentDate]);

  useEffect(() => {
    if(isDone) {
      fetchSteps();
    } else {
      return 
    }
  }, [isDone])

  console.log(isDone)

  const setStepsGoal = () => {
    if(userIsActive === false) {
        router.push('/pricing')
    } else {
        // allow user to set goal here still need to add this functionality
        update({dailyStepGoal: goal });
        setDailyStepModal(false);
        setGoal(0);
    }
  };

  

   // Calculate the progress percentage
   const progressPercentage = (todaysStep! / (userDailyStepGoal || 1)) * 100;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-indigo-50 shadow-md rounded-md ring-1 ring-indigo-300">
        <AnimatePresence>{stepAnalysisModal && <StepAnalysisModal isDone={isDone} setIsDone={setIsDone} onClose={() => setStepAnalysisModal(false)} />}</AnimatePresence>
        {dailyStepModal && <DailyGoalModal goal={goal} setGoal={setGoal}  onClose={() => setDailyStepModal(false)} handleDailyGoal={setStepsGoal} />}
      <h2 className="text-4xl font-semibold text-indigo-700 mb-4">Daily Steps</h2>
      <div className="flex justify-between items-center mb-4">
      {loading ? ( // Conditionally render skeleton or steps based on loading state
           <div className="w-24 h-4 bg-indigo-300 rounded-2xl animate-pulse"></div>
        ) : (
          <div className="text-2xl text-indigo-600 font-semibold">{todaysStep} steps</div>
        )}
        <button className="bg-indigo-600 hover:bg-indigo-800 text-white text-lg px-4 py-2 rounded-md" onClick={() => setStepAnalysisModal(true)}>Log Steps</button>
      </div>
      <div className=" mb-4 bg-white p-4 rounded-lg ring-1 ring-indigo-300">
        <p className="text-gray-700">Steps on {formattedDate}</p>
        <div onClick={() => setStepAnalysisModal(true)}  className="w-full hover:cursor-pointer bg-indigo-200 rounded-full h-2.5 mb-2">
          <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${Math.round(progressPercentage)}%` }}></div>
        </div>
        <p className="text-gray-700">{userIsActive === true && userDailyStepGoal ? `Goal: ${userDailyStepGoal} steps` : `Goal is not set ${userIsActive ? '' : '🔒'}`}</p>
        <div className="w-full bg-indigo-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            className="bg-gray-400 h-2.5 rounded-full"
            style={{ width: `${userIsActive === true ? progressPercentage : 0}%` }}
          ></div>
        </div>
      </div>
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-md mb-4" onClick={() => setDailyStepModal(true)}>Set Goal</button>
      <div className="flex justify-between items-center mb-4">
        <DatePicker />
      </div>
    </div>
  );
};

export default StepAnalysis;



