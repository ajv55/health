import { format } from 'date-fns'
import React from 'react'
import {Chart as ChartJS, BarController, LineController, LineElement, BarElement, CategoryScale, LinearScale, Legend, Tooltip} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { LuTrash } from "react-icons/lu";


ChartJS.register(BarController, LineController, LineElement,  BarElement, CategoryScale, LinearScale, Tooltip, Legend)

type MealTimeProps = {
    date?: string,
    mealType?: string,
    fruit?: any,
    meat?: any,
    carb?: any,
    drink?: any,
    vegetable?: any,
    onDelete?: () => void,
}

export default function MealTimeline({date, onDelete, mealType, fruit, meat, drink, vegetable, carb}: MealTimeProps) {

    console.log(carb)

    const fruitCarbs = fruit === '' ?  0 : fruit?.carbs ;
    const meatCarbs = meat === ''  ? 0 : meat?.carbs;
    const vegetableCarbs = vegetable === '' ? 0 : vegetable?.carbs;
    const drinkCarbs = drink === '' ? 0 : drink?.carbs;
    const carbCarbs = carb === ''  ? 0 : carb?.carbs;
    const carbCleanup = carbCarbs?.slice(0, 2);
    const totalCarbs = fruitCarbs + meatCarbs + drinkCarbs + vegetableCarbs + Number(carbCleanup)
    

    const fruitProtein = fruit === '' ?  0 : fruit?.protein ;
    const meatProtein = meat === '' ?  0 : meat?.protein ;
    const vegetableProtein = vegetable === '' ?  0 : vegetable?.protein ;
    const drinkProtein = drink === '' ?  0 : drink?.protein ;
    const carbProtein = carb === '' ?  0 : carb?.protein ;
    const carbProteinClean = carbProtein.slice(0, 1);
    const totalProtein = fruitProtein + meatProtein + drinkProtein + vegetableProtein + Number(carbProteinClean)

    const fruitFat = fruit === '' ?  0 : fruit?.fat ;
    const meatFat = meat === '' ?  0 : meat?.fat ;
    const vegetableFat = vegetable === '' ?  0 : vegetable?.fat ;
    const drinkFat = drink === '' ?  0 : drink?.fat ;
    const carbFat = carb === '' ?  0 : carb?.fat ;
    const carbFatClean = carbFat.slice(0, 1);
    const totalFat = fruitFat + meatFat + drinkFat + vegetableFat + Number(carbFatClean)

    console.log(totalFat)

    const option: any = {
        indexAxis: 'x', 
        scales: {
            x: {
                ticks: {
                  color: 'white',
                  beginAtZero: true,
                  font:{
                    size: 14
                  }
                },
                title: {
                  display: true,
                  text: 'Macronutrients',
                  color:'white',
                  font: {
                    size: 18
                  }
                },
                grid: {
                  color: 'white',
                }
              },
            y: {
                ticks: {
                  color: 'white',
                  beginAtZero: true,
                  font:{
                    size: 14
                  }
                },
                title: {
                  display: true,
                  text: 'Grams',
                  color:'white',
                  font: {
                    size: 18
                  }
                },
                grid: {
                  color: 'white',
                }
              }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top', // Position of the legend
                color: 'white',
                labels: {
                    color: 'white', 
                    font: {
                      size: 15
                    }
                  }
            },
            
        },
    };


    const data: any = {
        labels: ['Protein', 'Carbs', 'Fat'],
        datasets: [{
            label: 'Protein',
            data: [totalProtein , totalCarbs, totalFat],
            backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)'], // Background color for the area under the line
            borderColor: ['rgba(135, 186, 227, 0.875)', 'rgba(54, 162, 235, 0.2)', 'rgba(235, 54, 220, 0.2)'], // Border color for the line
            borderWidth: 2, // Border width for the line
            pointBackgroundColor: ['#36a3ebab', '#afeb36', '#ca04d5'], // Color of the points on the line
            pointBorderColor: '#fff', // Border color of the points on the line
            pointBorderWidth: 1, // Border width of the points on the line
            pointRadius: 5, // Radius of the points on the line
        },
        {
            label: 'Carbs',
            data: [],
            backgroundColor: 'rgba(156, 250, 102, 0.2)' , // Background color for the area under the line
            borderColor: 'rgba(93, 230, 62, 0.753)' , // Border color for the line
            borderWidth: 2, // Border width for the line
            pointBackgroundColor: 'rgba(54, 162, 235, 1)', // Color of the points on the line
            pointBorderColor: '#fff', // Border color of the points on the line
            pointBorderWidth: 1, // Border width of the points on the line
            pointRadius: 5,
        },
        {
            label: 'Fat',
            data: [],
            backgroundColor: 'rgba(226, 96, 224, 0.2)' , // Background color for the area under the line
            borderColor: 'rgba(218, 95, 237, 0.816)' , // Border color for the line
            borderWidth: 2, // Border width for the line
            pointBackgroundColor: '#cb3fb1', // Color of the points on the line
            pointBorderColor: '#fff', // Border color of the points on the line
            pointBorderWidth: 1, // Border width of the points on the line
            pointRadius: 5,
        },

    ]
    }


    const formattedDate = format(new Date(date!), 'MMM dd, yyyy' )

  return (
                    
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3  bg-zinc-800 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-3xl font-normal leading-none text-gray-400 dark:text-gray-500">{formattedDate}</time>
                <h3 className="text-2xl mb-4 mt-4 font-semibold text-gray-900 dark:text-white">{mealType}</h3>
                <div className='flex justify-evenly items-center'>
                    <div className='w-[45%] h-content flex flex-wrap gap-8 justify-evenly items-center'>
                        {meat !== '' && meat !== null &&  <div className='flex w-[26%] flex-col p-3 bg-slate-200 rounded-2xl drop-shadow-xl justify-start items-start'><ul className=' list-disc text-lg list-inside'><span className='font-bold text-xl tracking-wide'>{meat?.name}</span><li>Carbs: <span className='font-bold'>{meat?.carbs} g</span></li><li>Fat: <span className='font-bold'>{meat?.fat} g</span></li><li>Protein: <span className='font-bold'>{meat?.protein} g</span></li></ul></div>}
                        {fruit !== '' && fruit !== null && <div className='flex w-[26%] flex-col p-3 bg-slate-200 rounded-2xl drop-shadow-xl justify-start items-start'><ul className=' list-disc text-lg list-inside'><span className='font-bold text-xl tracking-wide'>{fruit?.name}</span><li>Carbs: <span className='font-bold'>{fruit?.carbs} g</span></li><li>Fat: <span className='font-bold'>{fruit?.fat} g</span></li><li>Protein: <span className='font-bold'>{fruit?.protein} g</span></li></ul></div>}
                        {drink !== '' && drink !== null && <div className='flex w-[26%] flex-col p-3 bg-slate-200 rounded-2xl drop-shadow-xl justify-start items-start'><ul className=' list-disc text-lg list-inside'><span className='font-bold text-xl tracking-wide'>{drink?.name}</span><li>Carbs: <span className='font-bold'>{drink?.carbs} g</span></li><li>Fat: <span className='font-bold'>{drink?.fat} g</span></li><li>Protein: <span className='font-bold'>{drink?.protein} g</span></li></ul></div>}
                        {carb !== '' && carb !== null && <div className='flex w-[26%] flex-col p-3 bg-slate-200 rounded-2xl drop-shadow-xl justify-start items-start'><ul className=' list-disc text-lg list-inside'><span className='font-bold text-xl tracking-wide'>{carb?.name}</span><li>Carbs: <span className='font-bold'>{carb?.carbs.replace('g', '')} g</span></li><li>Fat: <span className='font-bold'>{carb?.fat.replace('g', '')} g</span></li><li>Protein: <span className='font-bold'>{carb?.protein.replace('g', '')} g</span></li></ul></div>}
                        {vegetable !== '' && vegetable !== null && <div className='flex w-[26%] flex-col p-3 bg-slate-200 rounded-2xl drop-shadow-xl justify-start items-start'><ul className=' list-disc text-lg list-inside'><span className='font-bold text-xl tracking-wide'>{vegetable?.name}</span><li>Carbs: <span className='font-bold'>{vegetable?.carbs} g</span></li><li>Fat: <span className='font-bold'>{vegetable?.fat} g</span></li><li>Protein: <span className='font-bold'>{vegetable?.protein} g</span></li></ul></div>}
                    </div>
                    <div className='w-[50%] h-[20rem] bg-sky-800 p-3 rounded-2xl drop-shadow-2xl flex justify-center items-center'>
                    <Line options={option} data={data} />
                    </div>
                </div>
                <LuTrash onClick={onDelete} className=" cursor-pointer" size={35} />
                
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{}</p>
                
            </li>
    


  )
}
