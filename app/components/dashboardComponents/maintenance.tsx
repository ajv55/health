'use client';
import {Chart as ChartJS, DoughnutController, ArcElement} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import { useSession } from 'next-auth/react';

ChartJS.register(DoughnutController, ArcElement)

export default function Maintenance() {

    const {data: session} = useSession();

    const maintenance = session?.user?.calories;

    const options = {
        plugins: {
            legend: {
                labels: {
                    color: 'white',
                    font: {
                        size: 20
                    }
                }
            }
        }
    };
    const data = {
        labels: ['Maintenance'],
    datasets: [{
        label: 'Calories',
        data: [maintenance],
        backgroundColor: ['#2c06b7' ],
        borderColor: ['#9189ff' ]
    }]
    }

    const textCenter = {
        id: 'textCenter',
        beforeDatasetsDraw(chart: any, agrs: any, pluginOptions: any) {
            const {ctx, data} = chart;
            ctx.save();
            ctx.font = 'bolder 18px sans-serif';
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.fillText('Calories', chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
        }
    }

  return (
    <div className='w-[43%] h-[17rem] p-3 flex justify-center items-center bg-slate-900 rounded-2xl'>
        <Doughnut plugins={[textCenter]} options={options} data={data} />
    </div>
  )
}
