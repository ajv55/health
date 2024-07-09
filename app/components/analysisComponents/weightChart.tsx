'use client';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { format, addDays, isValid, parseISO } from 'date-fns';
import { useSession } from 'next-auth/react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const WeightChart = () => {
  const { data: session } = useSession();
  const [weightLogs, setWeightLogs] = useState<any[]>([]);
  const [estimatedEndDate, setEstimatedEndDate] = useState<Date | null>(null);
  const [totalDaysToLoseWeight, setTotalDaysToLoseWeight] = useState<string | number>('');

  const userWeight = Number(session?.user?.weight) ?? 0;
  const goal = Number(session?.user?.goal) ?? 0;
  const maintenanceCalories = Number(session?.user?.calories ) ?? 0;
  const recommend = maintenanceCalories - 300;

  useEffect(() => {
    const fetchWeightLogs = async () => {
      try {
        const response = await axios.get('/api/getWeightLogs');
        if (response.status === 201) {
          let updatedLogs = [...response.data];

          // Calculate estimated end date
          const goal = Number(session?.user?.goal) ?? 0;
          const { endDate, totalDays } = calculateEstimatedEndDate(updatedLogs, goal) as any;

          // Add estimated end date to logs
          if (endDate) {
            updatedLogs.push({ createdAt: endDate.toISOString(), newWeight: goal });
          }

          // Remove duplicates based on id
          const uniqueLogs = updatedLogs.filter((log, index, self) =>
            index === self.findIndex((t) => t.id === log.id)
          );

          setWeightLogs(uniqueLogs);
          setEstimatedEndDate(endDate);
          setTotalDaysToLoseWeight(isNaN(totalDays) ? 'Invalid days' : totalDays.toString());
        }
      } catch (error) {
        console.error('Error fetching weight logs:', error);
      }
    };

    fetchWeightLogs();
  }, [session]);

  const calculateEstimatedEndDate = (logs: any[], goal: number) => {
    if (logs.length > 0) {
      const currentWeight = logs[0].newWeight; // Most recent weight entry
      const deficitPerDay = maintenanceCalories - 300; // Example deficit per day
      const calorieDeficitPerWeek = deficitPerDay * 7;
      const poundsLostPerWeek = calorieDeficitPerWeek / 3500;
      const weeksToLoseWeight = (currentWeight - goal) / poundsLostPerWeek;

      const totalDays = Math.ceil(weeksToLoseWeight * 7);
      const endDate = addDays(new Date(), totalDays);

      return {
        endDate: isValid(endDate) ? endDate : null,
        totalDays: isNaN(totalDays) ? 'Invalid days' : totalDays.toString(),
      };
    }
    return { endDate: null, totalDays: 'No logs' };
  };

  const formatDate = (date: string) => {
    const formattedDate = parseISO(date);
    return format(formattedDate, 'MMM d, yyyy');
  };

  const data = {
    labels: weightLogs.map((log) => formatDate(log.createdAt)),
    datasets: [
      {
        label: 'Weight',
        data: weightLogs.map((log) => log.newWeight),
        fill: true,
        borderColor: '#6366F1',
        borderWidth: 2,
        backgroundColor: '#6365f13a',
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      x: { display: true },
      y: {},
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-indigo-600">Weight Chart</h2>
        <div className="flex items-center">
          <span className="mr-2">Jun 30 to Jul 6</span>
          <select className="border rounded-md p-2">
            <option>7 days</option>
            <option>14 days</option>
            <option>30 days</option>
          </select>
        </div>
      </div>
      <Line data={data} options={options} />
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-xl font-semibold text-blue-600">Estimated End Date</h4>
            <p className="text-gray-800">{isValid(estimatedEndDate) ? format(estimatedEndDate!, 'MMM d, yyyy') : 'Invalid date'}</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-blue-600">Days to Lose Weight</h4>
            <p className="text-gray-800">{totalDaysToLoseWeight}</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-indigo-600" />
            <span className="ml-2">Show Calories Eaten and Burned</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default WeightChart;
