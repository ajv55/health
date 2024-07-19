'use client';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { processExerciseData } from '@/app/utils/processExerciseData';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { format } from 'date-fns';
import axios from 'axios';

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
  }[];
}

const ExerciseAnalytics = () => {
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const currentDate = useSelector((state: RootState) => state.weight.currentDate);
  const formattedDate = format(currentDate!, 'MMM d');
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState<any[]>([]);

  const fetchExerciseLogs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`/api/getExerciseEntry?currentDate=${currentDate}`);
      if (res.status === 201) {
        setLogs(res.data);
      }
    } catch (error) {
      console.error('Error fetching exercise logs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExerciseLogs();
  }, [currentDate]);

  useEffect(() => {
    if (logs.length > 0) {
      const data = processExerciseData(logs);

      const labels = Object.keys(data);
      const setsData = labels.map((label) => data[label].sets.reduce((a: number, b: number) => a + b, 0));
      const repsData = labels.map((label) => data[label].reps.reduce((a: number, b: number) => a + b, 0));

      setChartData({
        labels,
        datasets: [
          {
            label: 'Total Sets',
            data: setsData,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
          {
            label: 'Total Reps',
            data: repsData,
            backgroundColor: 'rgba(153, 102, 255, 0.6)',
          },
        ],
      });
    }
  }, [logs]);

  console.log(logs)

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Exercise Analytics</h2>
      {loading ? (
        <p>Loading...</p>
      ) : chartData ? (
        <Bar data={chartData} />
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default ExerciseAnalytics;

