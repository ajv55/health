'use client';
import {Bar} from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement ,Title, Tooltip, Legend} from 'chart.js';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

ChartJS.register(CategoryScale, LinearScale, BarElement , Title, Tooltip, Legend );



export default function LineGraph() {
  const [lowTier, setLowTier] = useState([]); 


  const {data: session, status} = useSession();

  const userCal = Number(session?.user. calories);
  const lowTierCal = 250;
  const targetCal = userCal - lowTierCal; 

  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const caloriesTarget = weekdays.map((day) => {
    return targetCal
  })

  const moderateTier = userCal - 500;

  const moderateCal = weekdays.map((days) => {
    return moderateTier
  })

  const heavyTier = userCal - 750

  const heavyCal = weekdays.map((day) => {
    return heavyTier;
  })

  const options: any = {
    responsive: true,
    indexAxis: 'x',
    scale: {
      scaleLabel:{
          fontColor: 'red'
      }
  },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Calories',
          font: {
            size: 30,
          },
          fontColor: 'blue'
        }
      }
    },
  }; 
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Low Tier',
        data: caloriesTarget,
        backgroundColor: ['#72c2ff'],
        borderColor: ['#003fb4'],
        fill: false,
        borderWidth: 2,
      },
      {
        label: 'Medium Tier',
        data: moderateCal,
        backgroundColor: ['#fff27b'],
        borderColor: ['#c9ab02'],
        fill: false,
        borderWidth: 2,
      },
      {
        label: 'High Tier',
        data: heavyCal,
        backgroundColor: ['#fa6b6b'],
        borderColor: ['#6d1900'],
        fill: false,
        borderWidth: 2,
      }
    ]
  }; 

  return (
    <Bar  options={options} data={data}/> 
  )
}
 