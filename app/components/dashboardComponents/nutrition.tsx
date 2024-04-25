'use client';

import {Doughnut} from 'react-chartjs-2';
import {Chart as ChartJS, ArcElement} from 'chart.js'
import FoodCard from "./foodCard";
import Lunch from './lunch';
import Dinner from './dinner';
import { json } from 'stream/consumers';
import { useEffect, useState } from 'react';

ChartJS.register(ArcElement);


export default  function Nutrition() {

  const [res, setRes] = useState<any>();

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
  const day1breakfast = nutritiionGuide?.day_1?.breakfast?.ingredients; 
  const day1 = nutritiionGuide?.day_1
  const day2 = nutritiionGuide?.day_2;
  const totalCalForDay1Breakfast = day1breakfast?.map((d: any) => d.carbs);
  const totalDay1Protein = day1breakfast?.map((d: any) => d.protein).reduce((accumulator: any, currentValue: any) => accumulator + currentValue)
  const totalDay1Fat = day1breakfast?.map((d: any) => d.fat).reduce((accumulator: any, currentValue: any) => accumulator + currentValue)
  const totalDay1Carbs = totalCalForDay1Breakfast?.reduce((accumulator: any, currentValue: any) => accumulator + currentValue)
  console.log(day1)

  

  const option: any = { 
    plugins: {
      title: {
        display: true,
        text: 'Calories',
        color: 'black',
        font: {
          size: 22
        }
      }
    }
  }

  const data: any = {
    labels: ['Carbs', 'Protein', 'Fat'],
    datasets: [{
      label: 'Calories',
      data: [totalDay1Carbs, totalDay1Protein, totalDay1Fat],
      backgroundColor: ['#3f55fc', '#983df9', '#ffd198'],
      borderColor: ['#b7fff2', '#d5aeff', '#ffb75f'],
      hoverOffset: 6,
    }]
  }


  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart: any, agrs: any, pluginOptions: any) {
        const {ctx, data} = chart;
        ctx.save();
        ctx.font = 'bolder 20px sans-serif ';
        ctx.fillStyle = '#000000';
        ctx.textAlign = 'center';
        ctx.fillText('', chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
        ctx.fill();
    }
}

  return (
    <div className='w-[96%] ml-5 mt-16 h-content flex flex-wrap justify-evenly items-center gap-3 rounded-2xl bg-slate-200'>
     
      <div className='w-full mb-20 rounded-2xl bg-gradient-to-br from-slate-800 via-cyan-800 to-slate-300 flex justify-center items-center p-3'>
        <h1 className='text-7xl text-white font-bold tracking-wide text-center'>Your Personalize Meal Plan</h1>
      </div>

       {/* breakfast card */}
      <div className="w-[27%] drop-shadow-2xl  h-content flex flex-col justify-center items-center rounded-xl ">
        <h1 className='text-7xl font-bold tracking-wide text-center'>Breakfast</h1>
        <div className="w-full h-[17rem] bg-cover rounded-lg bg-center flex  justify-center items-center" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${day1?.breakfast?.img})`}}>
        <h3 className="text-4xl text-center text-white font-bold">{nutritiionGuide?.day_1?.breakfast?.meal}</h3>
        </div>
        <div className='w-full flex flex-col justify-evenly items-centers '>
          <div className='w-full mt-3 h-[20rem] flex justify-center items-center'>
          <Doughnut plugins={[textCenter]} options={option} data={data}/>
          </div>
          <h1 className='text-5xl mt-14 mb-10 font-bold tracking-wide text-center'>Ingredients</h1>
          <div className='w-full h-content flex flex-col justify-center items-center'>
          {day1breakfast?.map((ing: any, i: number ) => <FoodCard key={i} carbs={ing.carbs} caloriesOfIngredient={ing.calories} protein={ing.protein} fat={ing.fat} food={ing.food} />)}
          </div>
        </div>
      </div>

      {/* lunch card */}
      <Lunch />

      {/* dinner card */}
      <Dinner />



    </div>
  )
}
