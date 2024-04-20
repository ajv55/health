import {Line} from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement ,Title, Tooltip, Legend} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement , Title, Tooltip, Legend );

export default function BarDuration() {

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
        },
        title: {
          display: true,
          text: 'Minutes',
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
          text: 'Calories',
          color:'white',
          font: {
            size: 28
          }
        },
        grid: {
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
        labels: ['Day 1'],
        datasets:[
            {
            label: 'Low',
            data: [450],
            borderColor: ['#44b4f5'],
          }
    ]
    }

  return (
    <div>
        <Line options={options} data={data}/>
    </div>
  )
}
