'use client';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const WeightTracker = () => {
  const { data: session } = useSession();

  const router = useRouter();
  const userWeight = Number(session?.user.weight);
  const goal = Number(session?.user.goal);
  const userCalories = Number(session?.user.calories);

  // Caloric deficits for different impact levels
  const lowImpactDeficit = 250;
  const middleImpactDeficit = 350; // Average of 300-400
  const highImpactDeficit = 525; // Average of 450-600

  const calculateWeightLossTimeframe = (caloriesDeficit: number) => {
    const caloriesPerPound = 3500;
    const daysInWeek = 7;

    const totalWeightToLose = userWeight - goal;
    const weeklyWeightLoss = (caloriesDeficit * daysInWeek) / caloriesPerPound;
    const totalWeeksRequired = totalWeightToLose / weeklyWeightLoss;

    const weeks = Math.floor(totalWeeksRequired);
    const days = Math.round((totalWeeksRequired - weeks) * daysInWeek);

    return {
      totalWeeksRequired: totalWeeksRequired.toFixed(2),
      readableFormat: `${weeks} weeks and ${days} days`
    };
  };

  const weightLossPlan = calculateWeightLossTimeframe(userCalories - middleImpactDeficit);

   // Simulate weight loss data for the next 7 days for different impact levels
   const generateWeightLossData = (currentWeight: number, dailyLoss: number, days: number) => {
    const data = [];
    for (let i = 0; i < days; i++) {
      const cur = currentWeight - dailyLoss * i;
      data.push(cur.toFixed(2));
    }
    return data.sort((a, b) => parseFloat(b) - parseFloat(a)); // Sort from highest to lowest
  };

  const caloriesPerPound = 3500;
  const lowImpactDailyLoss = lowImpactDeficit / caloriesPerPound;
  const middleImpactDailyLoss = middleImpactDeficit / caloriesPerPound;
  const highImpactDailyLoss = highImpactDeficit / caloriesPerPound;

  const lowImpactData = generateWeightLossData(userWeight, lowImpactDailyLoss, 7);
  const middleImpactData = generateWeightLossData(userWeight, middleImpactDailyLoss, 7);
  const highImpactData = generateWeightLossData(userWeight, highImpactDailyLoss, 7);

  const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: 'Low Impact',
        data: lowImpactData,
        fill: false,
        borderColor: '#A5B4FC',
        borderWidth: 2,
        backgroundColor: '#A5B4FC',
        tension: 0.1
      },
      {
        label: 'Middle Impact',
        data: middleImpactData,
        fill: false,
        borderColor: '#6366F1',
        borderWidth: 2,
        backgroundColor: '#6366F1',
        tension: 0.1
      },
      {
        label: 'High Impact',
        data: highImpactData,
        fill: false,
        borderColor: '#4F46E5',
        borderWidth: 2,
        backgroundColor: '#4F46E5',
        tension: 0.1
      },
    ],
  };

  const options = {
    scales: {
      x: { display: true },
    //   y: {
    //     beginAtZero: false,
    //     suggestedMin: ,
    //     suggestedMax:,
    //   },
    },
    plugins: {
      annotation: {
        annotations: {
          currentWeightLine: {
            type: 'line',
            yMin: userWeight,
            yMax: userWeight,
            borderColor: 'red',
            borderWidth: 2,
            label: {
              content: 'Current Weight',
              enabled: true,
              position: 'start'
            }
          },
          goalWeightLine: {
            type: 'line',
            yMin: goal,
            yMax: goal,
            borderColor: 'green',
            borderWidth: 2,
            label: {
              content: 'Goal Weight',
              enabled: true,
              position: 'start'
            }
          }
        }
      }
    }
  };

  return (
    <div  className="w-[40%] mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div onClick={() => router.push('/dashboard/plan')} className=' flex flex-col justify-start items-start  hover:cursor-pointer  w-full'>
          <h2 className="text-xl font-bold text-gray-800">Weight Plan</h2>
         <div className='flex justify-center items-center gap-1'>
           <p className="text-gray-600">Lose {userWeight - goal} lb</p>
           <p className="text-gray-600">in {weightLossPlan.readableFormat}</p>
         </div>
        </div>
      </div>
      <div className="mb-4">
        <Line data={data} options={options as any} />
      </div>
      <div className="text-center">
        <p className="text-lg font-medium text-gray-800">Current Weight: {userWeight} lb</p>
        <p className="text-lg font-medium text-gray-800">Goal Weight: {goal} lb</p>
        <p className="text-lg font-medium text-gray-800">Daily Caloric Deficit: {userCalories - 300} kcal</p>
        <button
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded shadow"
        >
          Weigh-In
        </button>
      </div>
    </div>
  );
};

export default WeightTracker;
