import { format } from 'date-fns'
import React from 'react'
import {Chart as ChartJS, BarController, LineController, LineElement, BarElement, CategoryScale, LinearScale, Legend, Tooltip} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import MealCard from './mealCard';


ChartJS.register(BarController, LineController, LineElement,  BarElement, CategoryScale, LinearScale, Tooltip, Legend)

type MealTimeProps = {
    date?: string,
    mealType?: string,
    fruit?: any,
    meat?: any,
    carb?: any,
    drink?: any,
    vegetable?: any
}

export default function MealTimeline({date, mealType, fruit, meat, drink, vegetable, carb}: MealTimeProps) {

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

    console.log(totalProtein)

    const option: any = {
        indexAxis: 'x', 
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 10, // Adjust the step size of the y-axis ticks
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'top', // Position of the legend
            },
        },
    };


    const data: any = {
        labels: ['Protein', 'Carbs', 'Fat'],
        datasets: [{
            label: 'Protein',
            data: [totalProtein , totalCarbs, 20],
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
                <div className="absolute w-3 h-3 bg-zinc-800 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">{formattedDate}</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{mealType}</h3>
                <div className='flex justify-evenly items-center'>
                    <div className='w-[45%] h-content flex flex-wrap gap-8 justify-evenly items-center'>
                        {meat !== '' && meat !== null &&  <div className='flex w-[26%] flex-col p-3 bg-slate-200 rounded-2xl drop-shadow-xl justify-start items-start'><ul className=' list-disc text-lg list-inside'>{meat?.name}<li>Carbs: {meat?.carbs}</li><li>Fat: {meat?.fat}</li><li>Protein: {meat?.protein}</li></ul></div>}
                        {fruit !== '' && fruit !== null && <div className='flex w-[26%] flex-col p-3 bg-slate-200 rounded-2xl drop-shadow-xl justify-start items-start'><ul className=' list-disc text-lg list-inside'>{fruit?.name}<li>Carbs: {fruit?.carbs}</li><li>Fat: {fruit?.fat}</li><li>Protein: {fruit?.protein}</li></ul></div>}
                        {drink !== '' && drink !== null && <div className='flex w-[26%] flex-col p-3 bg-slate-200 rounded-2xl drop-shadow-xl justify-start items-start'><ul className=' list-disc text-lg list-inside'>{drink?.name}<li>Carbs: {drink?.carbs}</li><li>Fat: {drink?.fat}</li><li>Protein: {drink?.protein}</li></ul></div>}
                        {carb !== '' && carb !== null && <div className='flex w-[26%] flex-col p-3 bg-slate-200 rounded-2xl drop-shadow-xl justify-start items-start'><ul className=' list-disc text-lg list-inside'>{carb?.name}<li>Carbs: {carb?.carbs}</li><li>Fat: {carb?.fat}</li><li>Protein: {carb?.protein}</li></ul></div>}
                        {vegetable !== '' && vegetable !== null && <div className='flex w-[26%] flex-col p-3 bg-slate-200 rounded-2xl drop-shadow-xl justify-start items-start'><ul className=' list-disc text-lg list-inside'>{vegetable?.name}<li>Carbs: {vegetable?.carbs}</li><li>Fat: {vegetable?.fat}</li><li>Protein: {vegetable?.protein}</li></ul></div>}
                    </div>
                    <div className='w-[67%] h-[18rem]  flex justify-center items-center'>
                    <Line options={option} data={data} />
                    </div>
                </div>
                
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{}</p>
                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg></a>
            </li>
    


  )
}
