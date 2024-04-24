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



    const options: any = {
        responsive: true,
    indexAxis: 'x',
    scales: {
      x: {
        ticks: {
          color: 'black',
          beginAtZero: true,
          font: {
            size: 22
          }
        },
        grid: {
          color: 'black',
        },
        title: {
          display: true,
          text: 'Weeks',
          color: 'black',
          font: {
            size: 45,
          }
        }
      },
      y: {
        ticks: {
          color: 'black',
          beginAtZero: true,
          font:{
            size: 22
          }
        },
        title: {
          display: true,
          text: 'Pounds (lbs)',
          color:'black',
          font: {
            size: 45
          }
        },
        grid: {
          color: 'black',
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: 'black', 
          font: {
            size: 20
          }
        }
      }
    }
    };

    const data: any = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12'],
        datasets:[
            {
            label: 'Low-Impact',
            data: lowData,
            borderColor: ['#44b4f5'],
          },
          {
            label: 'Medium-Impact',
            data: medData,
            borderColor: ['#f6ff53'],
          },
          {
            label: 'High-Impact',
            data: hiData,
            borderColor: ['#f82020'],
          },
    ]
    }

  return (
    <div className='w-[99%] mr-2 h-content flex flex-col justify-center items-center gap-16 bg-slate-100 rounded-3xl'>
        <div className='w-full h-content bg-gradient-to-br from-slate-200 via-slate-600 rounded-3xl to-slate-300 flex justify-center items-center p-3'>
           <h1 className='text-7xl text-white text-center font-bold'>Potential Weight Loss</h1>
        </div>
        <h6 className='text-zinc-900 text-3xl text-center'>Within a 12 week process </h6>
        <Line className='p-5' options={options} data={data}/>
        <div className=' w-[95%] mb-12 flex flex-col text-center justify-center items-center gap-5'>
            <li className='text-3xl text-zinc-950'><span className='text-[#2bd5ff] text-4xl font-extrabold'>Low-Impact:</span> Research suggests that small, gradual changes in calorie intake are more sustainable and effective for long-term weight management than drastic reductions. A daily calorie deficit of around <span className='font-bold'>250 calories</span> can lead to a weight loss of approximately <span className='font-extrabold'>0.5 pounds per week</span>, which is within the recommended range for safe and sustainable weight loss.</li>
            <li className='text-3xl p-2 bg-gradient-to-br from-slate-900 via-slate-500  to-slate-300 rounded-lg text-white'><span className='text-[#fdfd30] text-4xl font-extrabold'>Med-Impact:</span> Studies have shown that a daily calorie deficit of <span className='font-extrabold'>500 calories</span> can lead to a weight loss of approximately <span className='font-extrabold'>1 pound per week</span>, which is considered a safe and effective rate of weight loss. This level of deficit is achievable through a combination of dietary changes and increased physical activity.</li>
            <li className='text-3xl text-black'><span className='text-[#fb2525] text-4xl  font-extrabold'>High-Impact:</span> While a daily calorie deficit of <span className='font-extrabold'>750 calories</span> can lead to rapid weight loss &#40;<span className='font-extrabold'>around 1.5 pounds per week</span>&#41;, it may also increase the risk of nutrient deficiencies, muscle loss, and metabolic slowdown if not implemented carefully. It is important to monitor progress closely and ensure that nutrient needs are met through a balanced diet.</li>
        </div>
    </div>
  )
}
