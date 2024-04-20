import {Doughnut} from 'react-chartjs-2';
import {Chart as ChartJS, ArcElement} from 'chart.js';

ChartJS.register(ArcElement)

type DurationDoughnutPorps = {
    duration?: string,
    time?: string
}

export default function DurationDoughnut({duration, time}: DurationDoughnutPorps) {

    const newTime =  time?.slice(0, 2);

    const options = {
        plugins: {
            legend: {
                labels: {
                    color: 'white'
                }
            }
        }
    };

    const data: any = {
        labels: ['duration'],
    datasets: [{
        label: 'Caloires to be burned',
        data: [duration],
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
            ctx.fillText(`${time}`, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
        }
    }

  return (
    <div className='w-80 h-80'>
        <Doughnut plugins={[textCenter]} options={options} data={data}/>
    </div>
  )
}
