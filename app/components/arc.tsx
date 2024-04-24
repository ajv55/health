'use client';
import {Doughnut} from 'react-chartjs-2';
import {Chart as ChartJS, ArcElement} from 'chart.js';
import {useSession} from 'next-auth/react'
import Table from './dashboardComponents/table';
import {motion} from 'framer-motion';

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
                    color: 'black',
                    font: {
                        size: 20
                    }
                }
            }
        }
    };
    const data = {
        labels: ['Low', 'Medium', 'High'],
    datasets: [{
        label: 'Calories',
        data: [low, med, hi],
        backgroundColor: ['#2bd5ff' ,'#fdfd30', '#fb2525'],
        borderColor: ['#cbf4fe' ,'#ffffb4', '#ff9292']
    }]
    }

    const textCenter = {
        id: 'textCenter',
        beforeDatasetsDraw(chart: any, agrs: any, pluginOptions: any) {
            const {ctx, data} = chart;
            ctx.save();
            ctx.font = 'bolder 20px sans-serif';
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.fillText('Calories', chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
        }
    }

  return (
    <motion.div initial={{scale: 0 ,opacity: 0, x: '-100vw'}} animate={{ opacity: 1, x: 0, transition: { duration: 0.5, type: 'spring', stiffness: 100 } }} whileInView={{x: 0, opacity: 1, scale: 1}}  className='w-[47%] h-content bg-slate-200 rounded-3xl flex flex-col justify-center items-center gap-12'>
        {/* <div className='w-full h-content p-3 flex justify-center items-center bg-gradient-to-bl from-slate-200 via-slate-800 to-slate-200 rounded-2xl'>
           <h2 className='text-white font-bold tracking-wider text-6xl'>Impact Paths</h2>
        </div> */}
        <div className='w-full h-[23rem] p-4 flex justify-center items-center'>
           <Doughnut  plugins={[textCenter]} options={options} data={data}/>
        </div>
    </motion.div>
  )
}
