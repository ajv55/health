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
  const data = {
    labels: ['Jun 30', 'Jul 1', 'Jul 2', 'Jul 3', 'Jul 4', 'Jul 5', 'Jul 6'],
    datasets: [
      {
        label: 'Weight',
        data: [197, 197, 197, 197, 197, 197, 197],
        borderColor: '#5A67D8',
        backgroundColor: '#5A67D8',
        pointRadius: 5,
        pointHoverRadius: 7,
        pointStyle: 'circle',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => `${tooltipItem.raw} lb`,
        },
      },
    },
    scales: {
      x: {
        display: true,
      },
      y: {
        display: true,
        ticks: {
          callback: (value: any) => `${value} lb`,
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
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
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox text-indigo-600" />
          <span className="ml-2">Show Calories Eaten and Burned</span>
        </label>
      </div>
    </div>
  );
};

export default WeightChart;
