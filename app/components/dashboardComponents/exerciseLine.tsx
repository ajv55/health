'use client';
import React from 'react'
import {Bar} from 'react-chartjs-2';
import {Chart as ChartJS, Legend, BarElement, BarController, CategoryScale, LinearScale} from 'chart.js';
import {useSession} from 'next-auth/react'

ChartJS.register(Legend, BarElement, BarController, LinearScale, CategoryScale)

export default function ExerciseLine() {

    const {data: session} = useSession();

    const usersWorkoutPlan = session && JSON.parse(session?.user?.workoutPlan);

    const Day1Cal = usersWorkoutPlan?.medium_intensity?.day1?.calories_burned
    const Day2Cal = usersWorkoutPlan?.medium_intensity?.day2?.calories_burned
    const Day3Cal = usersWorkoutPlan?.medium_intensity?.day3?.calories_burned
    const Day4Cal = usersWorkoutPlan?.medium_intensity?.day4?.calories_burned
    const Day5Cal = usersWorkoutPlan?.medium_intensity?.day5?.calories_burned
    const Day6Cal = usersWorkoutPlan?.medium_intensity?.day6?.calories_burned
    const Day7Cal = usersWorkoutPlan?.medium_intensity?.day7?.calories_burned

    console.log(usersWorkoutPlan?.medium_intensity?.day1?.calories_burned)

    const options: any = {
        responsive: true,
        indexAxis: 'x',
        plugins: {
            legend: {
              labels: {
                color: 'white',
                font: {
                    size: 15
                }
              }
            }
          },
        scales: {
          x: {
            ticks: {
                color: 'white',
                beginAtZero: true,
                font: {
                    size: 15
                }
              },
              grid: {
                color: 'white',
                display: false
              },
            title: {
              display: true,
              text: 'Calories',
              color: 'white',
              font: {
                size: 30,
              },
            }
          },
          y: {
            ticks: {
                color: 'white',
                beginAtZero: true,
                font: {
                    size: 17
                }
              },
              grid: {
                color: 'white',
                display: false
              },
            title: {
              display: true,
              text: 'Days',
              color: 'white',
              font: {
                size: 28
              }
            }
          }
        },
      }; 
      const data = {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [
          {
            label: 'Potential Calories To Burn',
            data: [Day1Cal, Day2Cal, Day3Cal, Day4Cal, Day5Cal, Day6Cal, Day7Cal],
            backgroundColor: ['#e98c3a',],
            borderColor: ['#ffc9a7'],
            fill: false,
            borderWidth: 2,
          }
        ]
      }; 

  return (
    <div className='w-full p-5 flex justify-center items-center bg-gradient-to-br  from-slate-900 via-slate-600 to-slate-300 rounded-b-3xl h-full'>
        <Bar className='mt-9 mb-10' options={options} data={data} />
    </div>
  )
}
