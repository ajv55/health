'use client';
import {Line} from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';
import { useEffect, useState } from 'react';

ChartJS.register(LineController, LineElement, LinearScale, CategoryScale, PointElement )

export default function CaloriesLine() {
    const [userCal, setUserCal] = useState<any>([]);

    useEffect(() => {
        const n = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun' , 'Jul' ]
        setUserCal(n)
    }, [])

    const option = {};

    const data = {
        labels: userCal,
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(209, 62, 13)',
          tension: 0.2
        }]
      };

  return (
    <div className='w-[75%]'>    
           <Line options={option} data={data} />
    </div>
  )
}
