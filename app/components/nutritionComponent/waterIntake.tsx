'use client';
import axios from "axios";
import { Chart as ChartJS, LineElement, PointElement, LineController, LinearScale, CategoryScale, Legend, Tooltip, Filler } from "chart.js";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { format } from "date-fns";


ChartJS.register(LineController, PointElement, LineElement, Legend, Tooltip, CategoryScale, LinearScale, Filler)

export default function WaterIntake() {

    const [waterList, setWaterList] = useState([]);

    const waterDate = waterList.map((wl: {date: Date}) => format(new Date(wl.date), 'MMM Lo yy'))

   const waterData = waterList.map((wl: {amount: number}) => wl?.amount)

    const getWaterIntake = async () => {
        return await axios.get('/api/getWaterRecord').then((res) => setWaterList(res?.data?.water))
    }


    useEffect(() => {
        getWaterIntake();
    }, []) 

    const option = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date',
                    color: '#ffffff',
                    font: {
                        size: 18
                    } // Change the color of the title text
                },
                ticks: {
                    color: '#ffffff', // Change the color of the ticks
                },
                grid: {
                    color: '#ffffff', // Change the color of the grid lines
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Amount (L)',
                    color: '#ffffff', 
                    font: {
                        size: 18
                    }// Change the color of the title text
                },
                ticks: {
                    color: '#ffffff', // Change the color of the ticks
                },
                grid: {
                    color: '#ffffff',
                    display: false // Change the color of the grid lines
                },
            },
        },
    };


    const data: any =  {
        labels: waterDate,
        datasets: [{
          label: 'Liters',
          data: waterData,
          fill: true,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.2
        }]
      };

  return (
    <div className='w-[45%] h-[18rem] flex flex-col justify-start items-start rounded-xl bg-slate-700'>
        <h2 className="text-4xl text-white font-bold tracking-wide p-2">Water Intake History</h2>
        {waterList.length === 0 && <div className="text-white text-4xl">No Water Logs 😭</div>}
        {waterList.length !== 0 && <Line options={option} data={data} /> }
    </div>
  )
}
