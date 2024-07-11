'use client';
import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import axios from 'axios'; // Import axios for API requests

const WaterIntakeChart = () => {
  const [waterIntakeData, setWaterIntakeData] = useState([]);
  const [totalWaterIntake, setTotalWaterIntake] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/getWater'); // Adjust URL as needed
        const { waterIntakeData, totalWaterIntake } = response.data;
        setWaterIntakeData(waterIntakeData);
        setTotalWaterIntake(totalWaterIntake);
      } catch (error) {
        console.error('Error fetching water intake data:', error);
      }
    };

    fetchData();
  }, []);

  const data = {
    labels: waterIntakeData.map((entry: any) => entry.date),
    datasets: [
      {
        label: 'Water Intake (oz)',
        data: waterIntakeData.map((entry: any) => entry.amount),
        backgroundColor: 'rgba(77, 58, 240, 0.2)',
        borderColor: '#4b5bc0',
        borderWidth: 1,
        barPercentage: 0.3, // Adjust bar width percentage (0.8 means 80% of category width)
        categoryPercentage: 0.7, // Adjust category width percentage (0.7 means 70% of available space)
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-indigo-50 max-w-6xl h-[37rem] overflow-scroll ring-1 ring-indigo-300 p-6 rounded-lg shadow-md">
      <h2 className="text-4xl font-bold text-indigo-600 mb-4">Water Intake Log</h2>
      <div className='w-full flex justify-center items-center h-[23rem]'>
         <Bar data={data} options={options} />
      </div>
      <div className="text-indigo-600 mt-4">
        <p>Total Water Intake: {totalWaterIntake} oz</p>
        <ul className="mt-2">
          {waterIntakeData.map((entry: any, index) => (
            <li key={index}>
              {entry?.date} - {entry?.amount} oz
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WaterIntakeChart;

