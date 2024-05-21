'use client';
import axios from "axios";
import { Chart as ChartJS, LineElement, PointElement, LineController, LinearScale, CategoryScale, Legend, Tooltip, Filler } from "chart.js";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { format } from "date-fns";
import WaterSkeleton from "./waterSkeleton";


ChartJS.register(LineController, PointElement, LineElement, Legend, Tooltip, CategoryScale, LinearScale, Filler)

export default function WaterIntake() {

    const [waterList, setWaterList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const waterDate = waterList.map((wl: {date: Date}) => format(new Date(wl.date), 'MMM Lo yy'))

   const waterData = waterList.map((wl: {amount: number}) => wl?.amount)

    const getWaterIntake = async () => {
        setIsLoading(true);
        return await axios.get('/api/getWaterRecord').then((res) => setWaterList(res?.data?.water)).finally(() => setIsLoading(false))
    }


    useEffect(() => {
        getWaterIntake();
    }, []) 

    const option = {
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 18
                    }
                }
            }
        },
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
          backgroundColor: 'rgba(95, 40, 171, 0.2)',
          borderColor: 'rgb(181, 149, 249)',
          tension: 0.2
        }]
      };

  return (
    <div className='w-[85%] h-content flex flex-col justify-center items-center rounded-2xl bg-slate-900'>
        {isLoading && <WaterSkeleton />}
        {waterList.length === 0 && !isLoading && <div className="text-white text-4xl">No Water Logs 😭</div>}
        <div className="w-full  h-full p-2 flex justify-center items-center">
           {waterList.length !== 0 && <Line options={option} data={data} /> }
        </div>
    </div>
  )
}
