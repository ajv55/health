'use client';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { format, addDays, isValid, parseISO } from 'date-fns';
import { setDaysToLoseWeight, setWeeks } from '@/app/slices/weightSlice';

interface User {
  weight: number;
  goal: number;
  activity: string;
  calories: number;
  createdAt: string;
}

interface SessionData {
  user: User;
}

const WeightTracker: React.FC = () => {
  const { data: session } = useSession() as { data: SessionData | null };
  const router = useRouter();
  const dispatch = useDispatch();

  const userWeight = session?.user?.weight ?? 0;
  const goal = session?.user?.goal ?? 0;
  const maintenanceCalories = session?.user?.calories ?? 0;

  const start = session?.user?.createdAt ? parseISO(session.user.createdAt) : new Date();

  const calculateEstimatedEndDate = (
    currentWeight: number,
    goalWeight: number,
    deficitPerDay: number
  ) => {
    if (
      isNaN(currentWeight) ||
      isNaN(goalWeight) ||
      currentWeight <= goalWeight ||
      deficitPerDay <= 0
    ) {
      console.error('Invalid input values', { currentWeight, goalWeight, deficitPerDay });
      return {
        endDate: 'Invalid date',
        totalDays: 'Invalid days',
      };
    }

    const calorieDeficitPerWeek = deficitPerDay * 7;
    const poundsLostPerWeek = calorieDeficitPerWeek / 3500;
    const weeksToLoseWeight = (currentWeight - goalWeight) / poundsLostPerWeek;

    if (isNaN(weeksToLoseWeight) || weeksToLoseWeight < 0) {
      console.error('Invalid weeksToLoseWeight calculation', {
        weeksToLoseWeight,
        currentWeight,
        goalWeight,
        calorieDeficitPerWeek,
      });
      return {
        endDate: 'Invalid date',
        totalDays: 'Invalid days',
      };
    }

    const totalDays = Math.ceil(weeksToLoseWeight * 7);
    const estimatedEndDate = addDays(new Date(), totalDays);

    if (!isValid(estimatedEndDate)) {
      console.error('Invalid estimatedEndDate', { estimatedEndDate });
      return {
        endDate: 'Invalid date',
        totalDays: 'Invalid days',
      };
    }

    return {
      endDate: estimatedEndDate,
      totalDays: totalDays,
    };
  };

  const recommend = maintenanceCalories - 300;
  const { endDate: recommendedEndDate, totalDays: recommendedTotalDays } =
    calculateEstimatedEndDate(userWeight, goal, recommend);

    useEffect(() => {
      dispatch(setDaysToLoseWeight(recommendedTotalDays));
      dispatch(setWeeks(recommendedEndDate));
    }, [])


  const formatDate = (date: Date | string) =>
    isValid(new Date(date)) ? format(new Date(date), 'MMMM d, yyyy') : 'Invalid date';

  const chartData = {
    labels: [formatDate(start), formatDate(recommendedEndDate)],
    datasets: [
      {
        label: 'Current Weight',
        data: [userWeight, goal],
        fill: true,
        borderColor: '#6366F1',
        borderWidth: 2,
        backgroundColor: '#6365f13a',
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: { display: true,
       },
      y: {
      
      },
    },
  };

  return (
    <div className="w-[40%] mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center ">
        <div onClick={() => router.push('/dashboard/plan')} className='w-full hover:cursor-pointer'>
          <h2 className="text-xl font-bold text-gray-800">Weight Plan</h2>
          <p className="text-gray-600">
            Lose {userWeight - goal} lb in {recommendedTotalDays} days
          </p>
        </div>
      </div>
      <div className="w-full h-[20rem] flex justify-center items-center">
        <Line data={chartData} options={chartOptions} />
      </div>
      <div className="text-center">
        <div className="bg-gray-100 flex flex-col justify-center items-center p-4 rounded-lg shadow-inner">
          <div className='flex justify-between w-full items-center'>
             <p className="text-xl font-medium text-indigo-600"><span className='text-xs text-gray-500'>Current Weight</span> {userWeight} lb</p>
             <p className="text-xl font-medium text-indigo-600"><span className='text-xs text-gray-500'>Goal Weight</span> {goal} lb</p>
          </div>
          <div className="my-4">
            <h4 className="text-xl font-semibold text-blue-600">Estimated End Date</h4>
            <p className="text-gray-800">
              {formatDate(recommendedEndDate)}
            </p>
          </div>
        </div>
        <button
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded shadow"
          onClick={() => router.push('/dashboard/plan?tab=Weight Loss Paths')}
        >
          View Other Weight Loss Paths
        </button>
      </div>
    </div>
  );
};

export default WeightTracker;


