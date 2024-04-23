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
                    color: 'white'
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
    <motion.div initial={{scale: 0, opacity: 0, x: '-20%'}} whileInView={{scale: 1, opacity: 1, x: '0%'}} transition={{duration: 0.8 , ease: 'easeIn'}} className='w-[45%] h-content bg-slate-600 rounded-xl flex flex-col justify-center items-center p-3 gap-12'>
        <h2 className='text-white font-bold tracking-wider text-6xl'>Impact Paths</h2>
        <Doughnut  plugins={[textCenter]} options={options} data={data}/>
        
    </motion.div>
  )
}
