'use client'; 
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import { Chart as ChartJS, DoughnutController, ArcElement, Tooltip, Legend  } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Lunch from "./lunch";
import Day1Dinner from "./day1Dinner";
import Day2Lunch from "./day2Lunch";
import Day2Dinner from "./day2Dinner";
import Day3Lunch from "./day3Lunch";
import Day3Dinner from "./day3Dinner";
import Day4Lunch from "./day4Lunch";
import Day4Dinner from "./day4Dinner";
import Day5Lunch from "./day5Lunch";
import Day5Dinner from "./day5Dinner";
import Day6Lunch from "./day6Lunch";
import Day6Dinner from "./day6Dinner";
import Day7Lunch from "./day7Lunch";
import Day7Dinner from "./day7Dinner";

ChartJS.register( ArcElement, Tooltip, Legend, DoughnutController);

export default function Day7() {

    const nutrition: any = useSelector((state: RootState) => state.nutrition.nutritionList);
    const list = nutrition && Object?.entries(nutrition)
    console.log(list[6]?.[1]?.breakfast)

    const options = {
      plugins: {
          legend: {
              labels: {
                  color: 'white',
                  font: {
                      size: 20
                  }
              }
          },
          textCenter: {
            calories: list[6]?.[1]?.breakfast?.calories || "" // Access the data from props or state
        }
      }
  };


  const data: any = {
      labels: ['Calories'],
  datasets: [{
      label: 'Calories',
      data: [list[6]?.[1]?.breakfast?.calories],
      backgroundColor: '#f49541',
      borderColor: '#fefbcb',
  }]
  }

  console.log(list[6]?.[1]?.breakfast?.img)

  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart: any, agrs: any, pluginOptions: any) {
        const {ctx, data} = chart;
        ctx.save();
        ctx.font = 'bolder 20px sans-serif';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText(pluginOptions.calories, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
    }
}

  return (
    <div className='bg-slate-900 overflow-scroll flex flex-wrap justify-between items-center  w-full h-[32rem]'>
      <div className="flex gap-5  w-[45%] flex-col justify-center items-center">
        <h1 className="text-7xl text-white font-bold tracking-wide">Breakfast</h1>
        <div style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(${list[6]?.[1]?.breakfast?.img})`}} className="w-[89%] h-[23rem] flex rounded-xl justify-center items-center bg-center bg-cover">
          <h1 className="text-4xl text-white font-bold tracking-wide text-center">{list[6]?.[1]?.breakfast?.meal}</h1>
        </div>
        
      </div>

      


      <div className="w-[53%] mt-4 gap-5 flex flex-col justify-center items-center">
      <div className=" bg-gradient-to-tl from-cyan-900 via-sky-800 to-cyan-300 flex justify-center items-center p-2 w-[65%] h-[16rem] rounded-xl">
        <Doughnut plugins={[textCenter]} options={options} data={data} />
      </div>
      <div className="relative w-full mr-6 overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 font-bold text-xl tracking-widest py-3">
                         Ingredients
                      </th>
                      <th scope="col" className="px-6 text-md tracking-wider font-medium py-3">
                          Calories
                      </th>
                      <th scope="col" className="px-6 text-md tracking-wider font-medium py-3">
                          Protein
                      </th>
                      <th scope="col" className="px-6 text-md tracking-wider font-medium py-3">
                          Carbs
                      </th>
                      <th scope="col" className="px-6 text-md tracking-wider font-medium py-3">
                          Fat
                      </th>
                  </tr>
              </thead>
              <tbody>
                  {list[6]?.[1]?.breakfast?.ingredients.map((i: any, index: number) => {
                    return (
                      <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {i.food}
                        </th>
                        <td className="px-6 py-4">
                            {i.calories} kcal
                        </td>
                        <td className="px-6 py-4">
                            {i.protein} g
                        </td>
                        <td className="px-6 py-4">
                            {i.carbs} g
                        </td>
                        <td className="px-6 py-4">
                            {i.fat} g
                        </td>
                    </tr>
                    )
                  })}
              </tbody>
          </table>
      </div>
      </div>
      <Day7Lunch />
      <Day7Dinner />

    </div>
  )
}