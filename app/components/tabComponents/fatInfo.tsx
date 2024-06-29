'use client';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const FatInfo = () => {

  const [fatItems, setFatItems] = useState([]);

  const fetchFatFoods = async () => {
    await axios.get('/api/getFatFoods').then((res: any) => {
      if(res.status === 201){
        setFatItems(res.data)
      }
    })
  }

  useEffect(() => {
    fetchFatFoods();
  }, [])

  const newItems = fatItems.filter((fi, i) => i < 3) 

  console.log(newItems)

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md space-y-6">
      <h2 className="text-4xl font-bold text-indigo-600">Total Fat in Example Foods</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {newItems.map((item: any, index) => (
          <div key={index} className="flex hover:shadow-md bg-white hover:shadow-indigo-400 flex-col items-center p-4 border rounded-lg shadow-sm">
          <Image src={item.img} alt={item.name} width={200} height={200} className="h-[13rem] w-full object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold">{item?.name}</h3>
          <p className="text-xl text-indigo-600">{item?.fat}g of fat</p>
          <p className="text-gray-600">{item?.servingSize}</p>
        </div>

        ))}
      </div>
      <div className='flex flex-col gap-4 justify-start items-start'>
        <h3 className="text-xl font-semibold text-indigo-600">About Total Fat</h3>
        <p className="text-gray-700">
          The default goal is 35% Calories. We need fat for basic bodily functions, as well as to absorb the
          fat-soluble vitamins A, D, E, and K. Fats always contain a mixture of saturated fatty acids,
          monounsaturated fatty acids, and polyunsaturated fatty acids, but will differ in the relative proportion
          of each type. Trans fatty acids are a less common type of fatty acid and foods made with partially
          hydrogenated oils are the most risky for heart health. To reduce the risk of heart disease, consume more
          Unsaturated Fat relative to Saturated or Trans Fat.
        </p>
        <Link className=' text-indigo-400 hover:cursor-pointer hover:text-indigo-600 hover:bg-indigo-300 hover:rounded-md p-2 hover:bg-opacity-50' href='/funFact'>READ ARTICLE</Link>
      </div>
    </div>
  );
};

export default FatInfo;
