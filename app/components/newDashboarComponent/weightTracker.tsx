'use client';
import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { format, addDays, isValid, parseISO } from 'date-fns';
import { setDaysToLoseWeight, setWeeks, setWeightLogs, setWeightModal } from '@/app/slices/weightSlice';
import { RootState } from '@/app/store';
import Link from 'next/link';
import axios from 'axios';
import LineChartSkeleton from '../skeleton/lineChartSkeleton';

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
  const [advice, setAdvice] = useState([]);
  const [randomAdvice, setRandomAdvice] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [weightIsLoading, setWeightIsLoading] = useState(false);
  const weightLogs = useSelector((state: RootState) => state.weight.weightLogs);
  
  const userWeight = session?.user?.weight ?? 0;
  const goal = session?.user?.goal ?? 0;
  const maintenanceCalories = session?.user?.calories ?? 0;
  const recommend = maintenanceCalories - 300;
  const start = session?.user?.createdAt ? parseISO(session.user.createdAt) : new Date();

  const fetchAdvice = async () => {
    await axios.get('/api/getAdvice').then((res: any) => {
      if(res.status === 201){
        setAdvice(res.data);
        const randomIndex = Math.floor(Math.random() * res?.data?.length);
        setRandomAdvice(res.data[randomIndex]);
        setLoading(false);
      }
    })
  };

  const validateInputs = (
    currentWeight: number,
    goalWeight: number,
    deficitPerDay: number
  ) => {
    return (
      !isNaN(currentWeight) &&
      !isNaN(goalWeight) &&
      currentWeight > goalWeight &&
      deficitPerDay > 0
    );
  };

  const calculateEstimatedEndDate = (
    currentWeight: number,
    goalWeight: number,
    deficitPerDay: number
  ) => {
    const calorieDeficitPerWeek = deficitPerDay * 7;
    const poundsLostPerWeek = calorieDeficitPerWeek / 3500;
    const weeksToLoseWeight = (currentWeight - goal) / poundsLostPerWeek;
  
    const totalDays = Math.ceil(weeksToLoseWeight * 7);
    const estimatedEndDate = addDays(new Date(), totalDays);
  
    return {
      endDate: isValid(estimatedEndDate) ? estimatedEndDate : null,
      totalDays: isNaN(totalDays) ? 'Invalid days' : totalDays,
    };
  };

  const memoizedCalculation = useMemo(() => {
    if (validateInputs(userWeight, goal, recommend)) {
      return calculateEstimatedEndDate(Number(userWeight), Number(goal), Number(recommend));
    }
    return { endDate: null, totalDays: 'Invalid days' };
  }, [userWeight, goal, recommend]);

  const recommendedEndDate = memoizedCalculation.endDate;
  const recommendedTotalDays = memoizedCalculation.totalDays;

  const fetchWeightLogs = async () => {
    setWeightIsLoading(true);
    try {
      const response = await axios.get('/api/getWeightLogs');
      if (response.status === 201) {
        const updatedLogs = [...response.data];
        updatedLogs.push({ createdAt: new Date(recommendedEndDate!).toISOString(), newWeight: goal });
        // Remove duplicates based on id
      const uniqueLogs = updatedLogs.filter((log, index, self) => 
        index === self.findIndex((t) => t.id === log.id)
      );

      dispatch(setWeightLogs(uniqueLogs));
      }
    } catch (error) {
      console.error('Error fetching weight logs:', error);
    } finally{
      setWeightIsLoading(false)
    }
  };

  useEffect(() => {
    if (recommendedEndDate && recommendedTotalDays !== 'Invalid days') {
      dispatch(setDaysToLoseWeight(recommendedTotalDays));
      dispatch(setWeeks(recommendedEndDate.toISOString()));
      fetchWeightLogs(); // Fetch weight logs only when recommendedEndDate is valid
    }
  }, [dispatch, recommendedTotalDays, recommendedEndDate]);

  useEffect(() => {
    fetchAdvice();
  }, []);

  const formatDate = (date: Date | string) =>
    isValid(new Date(date)) ? format(new Date(date), 'MMMM d, yyyy') : 'Invalid date';

  const formatWeightLogsForChart = (logs: any) => {
    return logs.map((log: any) => ({
      x: formatDate(log.createdAt),
      y: log.newWeight,
    }));
  };

  const chartData = {
    labels: weightLogs?.map((log: any) => formatDate(log?.createdAt)),
    datasets: [
      {
        label: 'Weight',
        data: formatWeightLogsForChart(weightLogs),
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
      x: { display: true },
      y: {},
    },
  };

  console.log(weightIsLoading)

  return (
    <div className="lg:w-[40%] mt-8 lg:mt-0 w-full h-[43rem] mx-auto  bg-white relative shadow-lg rounded-lg">
      {weightIsLoading && <LineChartSkeleton />}
      <div className="flex p-4 justify-between items-center ">
        <div onClick={() => router.push('/dashboard/plan')} className='w-full hover:cursor-pointer'>
          <h2 className="text-xl font-bold text-indigo-600">Weight Plan</h2>
          <p className="text-gray-600">
            Lose {userWeight - goal} lb in {recommendedTotalDays} days
          </p>
        </div>
      </div>
      <div onClick={() => router.push('/dashboard/analysis?tab=weightLoss')} className="w-full hover:cursor-pointer p-3 h-[17rem] flex justify-center items-center">
        <Line data={chartData} options={chartOptions} />
      </div>
      <div className="text-center p-3">
        <div className="bg-gray-100  ring-2 ring-indigo-400 flex flex-col justify-center items-center p-4 rounded-lg shadow-inner">
          <div className='flex justify-between w-full items-center'>
             <p className="text-xl font-medium text-indigo-600"><span className='text-xs text-gray-500'>Current Weight</span> {userWeight} lb</p>
             <p className="text-xl font-medium text-indigo-600"><span className='text-xs text-gray-500'>Goal Weight</span> {goal} lb</p>
          </div>
          <div className="my-4">
            <h4 className="text-xl font-semibold text-blue-600">Estimated End Date</h4>
            <p className="text-gray-800">
              {formatDate(recommendedEndDate!)}
            </p>
          </div>
          <button
          className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded shadow"
          onClick={() => dispatch(setWeightModal(true))}
        >
          Weigh-In
        </button>
        </div>
      </div>
      <div className='w-full flex flex-col gap-2 justify-center items-center  h-24 p-2 bg-white rounded-lg '>
        {loading ? (
          <div className="animate-pulse flex justify-center items-center space-x-4 w-full">
            <div className="h-4  bg-gray-300 rounded w-3/4"></div>
          </div>
        ) : (
          <p className='text-indigo-700 text-center text-balance text-[16px] font-semibold'>{randomAdvice?.text}</p>
        )}
        <Link className='text-indigo-400 self-end hover:cursor-pointer hover:text-indigo-600 hover:bg-indigo-300 hover:rounded-md p-2 hover:bg-opacity-50' href='/dashboard/analysis?tab=advice'>
          My Advice
        </Link>
      </div>
    </div>
  );
};

export default WeightTracker;
