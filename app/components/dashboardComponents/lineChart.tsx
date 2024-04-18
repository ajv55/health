'use client';
import {Line} from 'react-chartjs-2';
import {Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Title, Tooltip, LineController } from 'chart.js';
import {useSession} from 'next-auth/react'
import { useState } from 'react';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Title, Tooltip, LineController)


export default function LineChart() {
    const [lowTierWeight, setLowTierWeight] = useState<any>([]);

    const {data: session, status} = useSession();

    const usersCalories = Number(session?.user?.calories);
    const low = 250 * 7;
    const med = 500 * 7;
    const hi = 750 * 7;
    const onePound = 3500;

    const weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12'];
    const lowData = weeks.map((w, i) => {
        const num = i + 1;
        const r = low * num;
        const potential = r / onePound;


        return potential ;
    } )

    const medData = weeks.map((w, i) => {
        const num = i + 1;
        const r = med * num;
        const potential = r / onePound;


        return potential ;
    } )

    const hiData = weeks.map((w, i) => {
        const num = i + 1;
        const r = hi * num;
        const potential = r / onePound;


        return potential ;
    } )

    console.log(hiData)


    const options: any = {
        responsive: true,
    indexAxis: 'x',
    scales: {
      x: {
        ticks: {
          color: 'white',
          beginAtZero: true
        },
        grid: {
          color: 'white',
          display: false
        },
        title: {
          display: true,
          text: 'Weeks',
          color: 'white',
          font: {
            size: 30,
          }
        }
      },
      y: {
        ticks: {
          color: 'white',
          beginAtZero: true
        },
        title: {
          display: true,
          text: 'Pounds (lbs)',
          color:'white',
          font: {
            size: 28
          }
        },
        grid: {
          display: false,
          color: 'white'
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: 'white'
        }
      }
    }
    };

    const data: any = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12'],
        datasets:[
            {
            label: 'Low',
            data: lowData,
            borderColor: ['#44b4f5'],
          },
          {
            label: 'Medium',
            data: medData,
            borderColor: ['#f6ff53'],
          },
          {
            label: 'High',
            data: hiData,
            borderColor: ['#f82020'],
          },
    ]
    }

  return (
    <div className='w-[47%] mt-28 h-[30rem] flex flex-col justify-center items-center gap-4 bg-slate-600 rounded-xl'>
        <p className='text-5xl text-white text-center font-bold'>Potential Weight Loss</p>
        <h6 className='text-white text-lg text-center'>Within a 12 week process </h6>
        <Line options={options} data={data}/>
    </div>
  )
}
