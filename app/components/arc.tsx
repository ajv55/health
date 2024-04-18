'use client';
import {Doughnut} from 'react-chartjs-2';
import {Chart as ChartJS, ArcElement} from 'chart.js';
import {useSession} from 'next-auth/react'

ChartJS.register(ArcElement)

export default function Arc() {
    const {data: session} = useSession();

    const usersCal = Number(session?.user.calories);
    const low = usersCal - 250;
    const med = usersCal - 500;
    const hi = usersCal - 750;

    const options = {
        plugins: {
            legend: {
                labels: {
                    color: 'white'
                }
            }
        }
    };
    const data = {
        labels: ['Low-Impact', 'Med-Impact', 'High-Impact'],
    datasets: [{
        label: 'Calories',
        data: [low, med, hi],
        backgroundColor: ['#2bd5ff' ,'#fdfd30', '#fb2525'],
        borderColor: ['#04809f' ,'#9b9b02', '#a80000']
    }]
    }

    const textCenter = {
        id: 'textCenter',
        beforeDatasetsDraw(chart: any, agrs: any, pluginOptions: any) {
            const {ctx, data} = chart;
            ctx.save();
            ctx.font = 'bolder 30px sans-serif';
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.fillText('Calories', chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
        }
    }

  return (
    <div className='w-[45%] h-content bg-slate-600 rounded-xl mt-28 ml-4 flex flex-col justify-center items-center p-3 gap-12'>
        <Doughnut plugins={[textCenter]} options={options} data={data}/>
        <div>
            <li className='text-xl text-white'><span className='text-[#2bd5ff] font-extrabold'>Low-Impact:</span> <span className='font-bold text-2xl'>{low}</span> daily calories</li>
            <li className='text-xl text-white'><span className='text-[#fdfd30] font-extrabold'>Med-Impact:</span> <span className='font-bold text-2xl'>{med}</span> daily calories</li>
            <li className='text-xl text-white'><span className='text-[#fb2525] font-extrabold'>High-Impact:</span> <span className='font-bold text-2xl'>{hi}</span> daily calories</li>
        </div>
    </div>
  )
}
