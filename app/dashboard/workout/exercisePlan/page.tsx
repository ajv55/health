'use client';

import axios from 'axios';
import { parseJSON } from 'date-fns';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import GeneratedPlan from '../../../components/workoutComponents/workoutPlan';
import style from '../../../style.module.css';
import Link from 'next/link';
import { IoArrowBackOutline } from 'react-icons/io5';

interface UserProps  {
    age?: string,
    weight?: string,
    height?: string,
    activityLevel?: string
}

interface PreferencesProps {
    workoutType?: string,
    workoutGoal?: string,
    daysPerWeek?: number,
    duration?: number
}

const WorkoutPlan = () => {

    const {data: session} = useSession();

    const userAge = session?.user.age;
    const userWeight = session?.user.weight;
    const userHeight = session?.user.height;
    const userActivityLevel = session?.user.activity

  const user: UserProps = {
    age: userAge,
    weight: userWeight,
    height: userHeight,
    activityLevel: userActivityLevel,
  };

  const [preferences, setPreferences] = useState<PreferencesProps>({
    workoutType: 'Dumbbells',
    workoutGoal: 'Weight Loss',
    daysPerWeek: 3,
    duration: 30,
  });
  
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGeneratePlan = async () => {
    setLoading(true);
    const generatedPlan = await generateWorkoutPlan(user, preferences);
    setLoading(false);
  };

  const generateWorkoutPlan = async (user: UserProps, preferences: PreferencesProps) => {

    const res = await axios.post('/api/generateExercisePlan', {preferences, user}).then((res) => {
        console.log(res)
        if(res.status === 201) {
            toast.success('Generated exercise plan')
            setPlan(res?.data)
        }
    });


  };
  

  return (
    <div className={`${style.background} w-full flex flex-col justify-start items-center gap-3 overflow-scroll`}>
      <div className='flex justify-start bg-transparent p-1 items-start w-full'>
        <Link href='/dashboard/workout' className='flex uppercase justify-start items-center text-indigo-500 gap-4'><IoArrowBackOutline  size={30} className='text-indigo-500' /> Back to exercise tracker</Link>
      </div>
      <div className="w-[75%] mx-auto p-6 ring-2 ring-indigo-400 bg-gray-100 rounded-lg shadow-lg mt-10">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800">Generate Your Workout Plan</h2>

       <div className='flex justify-between items-start'>
          {/* User Information Section */}
          <div className="bg-white h-[25rem] w-[35%] ring-2 ring-indigo-600 drop-shadow-lg p-4 mb-6 rounded-lg shadow-md">
            <h3 className="text-3xl font-semibold mb-2 text-center text-indigo-700">Your Information</h3>
            <ul className="text-indigo-600 flex flex-col justify-center gap-3">
              <li className='bg-gray-100 ring-1 ring-indigo-600 rounded-lg flex justify-center items-center w-full flex-col h-[4rem] text-xl p-2'><strong>Age</strong> {user.age}</li>
              <li className='bg-gray-100 ring-1 ring-indigo-600 rounded-lg flex justify-center items-center w-full flex-col h-[4rem] text-xl p-2'><strong>Weight</strong> {user.weight} lb</li>
              <li className='bg-gray-100 ring-1 ring-indigo-600 rounded-lg flex justify-center items-center w-full flex-col h-[4rem] text-xl p-2'><strong>Height</strong> {user.height} cm</li>
              <li className='bg-gray-100 ring-1 ring-indigo-600 rounded-lg flex justify-center items-center w-full flex-col h-[4rem] text-xl p-2'><strong>Activity Level</strong> {user.activityLevel}</li>
            </ul>
          </div>

          {/* Workout Preferences Form */}
          <form className="space-y-4 w-[60%] ring-2 ring-indigo-600 drop-shadow-lg bg-white p-6 rounded-lg shadow-md">
            {/* Workout Type */}
            <div>
              <label className="block text-sm font-medium text-indigo-900">Workout Type</label>
              <select
                value={preferences.workoutType}
                onChange={(e) => setPreferences({ ...preferences, workoutType: e.target.value })}
                className="w-full p-2 mt-1 rounded-lg bg-gray-100 border border-indigo-300 focus:border-indigo-500"
              >
                <option>Dumbbells</option>
                <option>Bodyweight</option>
                <option>Machines</option>
              </select>
            </div>

            {/* Workout Goal */}
            <div>
              <label className="block text-sm font-medium text-indigo-900">Workout Goal</label>
              <select
                value={preferences.workoutGoal}
                onChange={(e) => setPreferences({ ...preferences, workoutGoal: e.target.value })}
                className="w-full p-2 mt-1 rounded-lg bg-gray-100 border border-indigo-300 focus:border-indigo-500"
              >
                <option>Weight Loss</option>
                <option>Muscle Gain</option>
                <option>General Fitness</option>
              </select>
            </div>

            {/* Days Per Week */}
            <div>
              <label className="block text-sm font-medium text-indigo-900">Number of Days per Week</label>
              <select
                value={preferences.daysPerWeek}
                onChange={(e) => setPreferences({ ...preferences, daysPerWeek: parseInt(e.target.value) })}
                className="w-full p-2 mt-1 rounded-lg bg-gray-100 border border-indigo-300 focus:border-indigo-500"
              >
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
            </div>

            {/* Workout Duration */}
            <div>
              <label className="block text-sm font-medium text-indigo-900">Workout Duration (minutes)</label>
              <select
                value={preferences.duration}
                onChange={(e) => setPreferences({ ...preferences, duration: parseInt(e.target.value) })}
                className="w-full p-2 mt-1 rounded-lg bg-gray-100 border border-indigo-300 focus:border-indigo-500"
              >
                <option>30</option>
                <option>45</option>
                <option>60</option>
              </select>
            </div>

            {/* Submit Button */}
          {userAge !== undefined &&  <button
              type="button"
              onClick={handleGeneratePlan}
              className="mt-4 w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
            >
              {loading ? 'Generating...' : 'Generate Workout Plan'}
            </button>}
          </form>
       </div>

        {/* Display Workout Plan */}
        {plan && <GeneratedPlan workoutPlan={plan}  />}
        {plan === null && <div><h1>No Exercise Plan</h1></div>}
      </div>
    </div>
  );
};

export default WorkoutPlan;
