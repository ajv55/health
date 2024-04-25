'use client';
import React, { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, DoughnutController } from 'chart.js';
import FoodCard from './foodCard';

ChartJS.register(ArcElement, DoughnutController);

export default function Lunch() {

  const [res, setRes] = useState<any>()

  const getNutrition = async () => {
    try {
      const guide = await fetch('/api/food', { method: 'GET' });
      const res = await guide.json();
      console.log(res)
      setRes(res)
  } catch (error) {
      console.error('Something went wrong:', error);
  }
  }

  useEffect(() => {
    if(!getNutrition) {
      return console.log('nutrition meal guide doesnt exist')
    }
    getNutrition()
  }, [])

    const nutritiionGuide = res?.nut?.data?.nutrition_guide
    const day2breakfast = nutritiionGuide?.day_2?.breakfast?.ingredients; 

    const day2 = nutritiionGuide?.day_2;
    const day1 = nutritiionGuide?.day_1;
    const totalCalForDay1Breakfast = day2breakfast?.map((d: any) => d.carbs);
    const totalDay2Protein = day2breakfast?.map((d: any) => d.protein).reduce((accumulator: any, currentValue: any) => accumulator + currentValue)
    const totalDay2Fat = day2breakfast?.map((d: any) => d.fat).reduce((accumulator: any, currentValue: any) => accumulator + currentValue)
    const totalDay2Carbs = totalCalForDay1Breakfast?.reduce((accumulator: any, currentValue: any) => accumulator + currentValue)
    const stringCal = day2?.breakfast?.calories
    console.log(res?.nut?.data?.nutrition_guide.day_1?.lunch?.calories)

    const option: any = { 
        plugins: {
          title: {
            display: true,
            text: 'Calories',
            color: 'black',
            font: {
              size: 23
            }
          }
        }
      }
    
      const data: any = {
        labels: ['Carbs', 'Protein', 'Fat'],
        datasets: [{
          label: 'Calories',
          data: [totalDay2Carbs, totalDay2Protein, totalDay2Fat],
          backgroundColor: ['#fd843a', '#14f37c', '#c3290a'],
          borderColor: ['#ffd685', '#d5aeff', '#ff8d8d'],
          hoverOffset: 6,
        }]
      }

    const textCent = {
        id: 'textCent',
        beforeDatasetsDraw(chart: any, agrs: any, pluginOptions: any) {
            const {ctx, data} = chart;
            
            ctx.save();
            ctx.font = 'bolder 30px ';
            ctx.fillStyle = '#c14646';
            ctx.textAlign = 'center';
            ctx.fillText(day1?.lunch?.calories, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
        }
    }


    const centerText = {
      id: 'centerText',
      beforeDatasetsDraw(chart: any, args: any, pluginOptions: any) {
        const {ctx, data} = chart;

        ctx.save();
        ctx.font = 'bolder 30px sans-serif';
        ctx.fillStyle = 'red';
        ctx.textAlign = 'center';
        ctx.fillText('', chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y )
      }
    }

  return (
    <div className="w-[27%] drop-shadow-2xl  h-content flex flex-col justify-center items-center rounded-xl ">
    <h1 className='text-7xl font-bold tracking-wide text-center'>Lunch</h1>
    <div className="w-full h-[17rem] rounded-md bg-cover bg-center flex  justify-center items-center" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${day2?.breakfast?.img})`}}>
    <h3 className="text-4xl text-center text-white font-bold">{nutritiionGuide?.day_2?.breakfast?.meal}</h3>
    </div>
    <div className='w-full flex flex-col justify-evenly items-centers '>
      <div className='w-full mt-3 h-[20rem] flex justify-center items-center'>
      <Doughnut plugins={[centerText]} options={option} data={data}/>
      </div>
      <h1 className='text-5xl mt-14 mb-10 font-bold tracking-wide text-center'>Ingredients </h1>
      <div className='w-full h-content flex flex-col justify-center items-center'>
      {day2breakfast?.map((ing: any, i: number ) => <FoodCard key={i} carbs={ing.carbs} caloriesOfIngredient={ing.calories} protein={ing.protein} fat={ing.fat} food={ing.food} />)}
      </div>
    </div>
  </div>
  )
}
