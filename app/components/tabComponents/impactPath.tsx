// components/ImpactPathChart.tsx

import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import React from 'react';

interface ImpactPathChartProps {
  title: string;
  maintenanceCalories: number;
  deduction: number;
  description: string;
}

const ImpactPathChart: React.FC<ImpactPathChartProps> = ({ title, maintenanceCalories, deduction, description }) => {
  const impactCalories = maintenanceCalories - deduction;

  const data = {
    labels: ['Maintenance', `${title}`],
    datasets: [
      {
        label: `${title} Path`,
        data: [maintenanceCalories, impactCalories],
        borderColor: '#4f46e5', // Indigo color
        backgroundColor: 'rgba(79, 70, 229, 0.2)', // Indigo color with transparency
        fill: true,
        tension: 0.4, // Smoother line
        pointHoverRadius: 8, // Larger points on hover
        pointHoverBackgroundColor: '#4f46e5',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return `${context.dataset.label}: ${context.raw} calories`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Calories',
        },
      },
    },
  };

  return (
    <div className="p-4 bg-gray-100 ring-2 ring-indigo-400 rounded-lg shadow-md hover:shadow-lg hover:shadow-indigo-300 transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-indigo-600 mb-2">{title} Impact</h3>
      </div>
      <Line data={data} options={options as any} />
      <div className="mt-4 text-indigo-600">
        <p>{title} Impact: -{deduction} calories</p>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ImpactPathChart;


