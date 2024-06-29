'use client';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const CarbInfo = () => {

  const [carbItems, setCarbItems] = useState([]);

  const fetchCarbFoods = async () => {
    await axios.get('/api/getCarbsFoods').then((res: any) => {
      if(res.status === 201){
        setCarbItems(res.data)
      }
    })
  }

  useEffect(() => {
    fetchCarbFoods();
  }, [])

  const newItems = carbItems.filter((ci, i) => i < 3) 

  console.log(newItems)

  return (
    <div className="max-w-5xl mb-20 mx-auto p-6 bg-white rounded-lg shadow-md space-y-6">
      <h2 className="text-4xl font-bold text-indigo-600">Total Carbohydrates in Example Foods</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {newItems.map((item: any, index) => (
          <div key={index} className="flex hover:shadow-md hover:shadow-indigo-400 flex-col items-center p-4 border rounded-lg shadow-sm">
            <Image src={item.img} alt={item.name} width={200} height={200} className="h-48 w-48 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold">{item?.name}</h3>
            <p className="text-xl text-indigo-600">{item?.carbs}g of carbohydrates</p>
            <p className="text-gray-700">Calories: {item?.calories}</p>
            <p className="text-gray-700">Protein: {item?.protein}g</p>
            <p className="text-gray-700">Fat: {item?.fat}g</p>
            <p className="text-gray-700">Serving Size: {item?.servingSize}</p>
            <p className="text-gray-700">Sodium: {item?.sodium}mg</p>
            <p className="text-gray-700">Trans Fat: {item?.transFat}g</p>
            <p className="text-gray-700">Saturated Fat: {item?.satFat}g</p>
            <p className="text-gray-700">Calcium: {item?.calcium}mg</p>
            <p className="text-gray-700">Fiber: {item?.fiber}g</p>
          </div>
        ))}
      </div>
      <div className='flex flex-col gap-4 justify-start items-start'>
        <h3 className="text-xl font-semibold text-indigo-600">About Carbohydrates</h3>
        <p className="text-gray-700">
          The default goal is 45% of daily caloric intake. Total Carbohydrates, as listed on food labels, encompass all carbohydrate components including starches, total sugars, sugar alcohols, and dietary fiber. Major sources of carbohydrates include grains, starchy vegetables, fruits, milk, and milk products (excluding cheese). Managing portion sizes is crucial to limit total carbohydrate load and caloric intake, particularly for individuals with diabetes or excess weight. Regardless of dietary preference for low-carb or high-carb, prioritizing whole foods over refined versions helps to limit calorie intake and reduce the consumption of added sugars, fats, and sodium.
        </p>
        <Link className=' text-indigo-400 hover:cursor-pointer hover:text-indigo-600 hover:bg-indigo-300 hover:rounded-md p-2 hover:bg-opacity-50' href='/mainCarbs'>READ ARTCILE</Link>
      </div>
    </div>
  );
};

export default CarbInfo;
