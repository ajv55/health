'use client';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const ProteinInfo = () => {

  const [proteinItems, setProteinItems] = useState([]);

  const fetchProteinFoods = async () => {
    await axios.get('/api/getProteinFoods').then((res: any) => {
      if(res.status === 201){
        setProteinItems(res.data)
      }
    })
  }

  useEffect(() => {
    fetchProteinFoods();
  }, [])

  const newItems = proteinItems.filter((pi, i) => i < 3) 

  console.log(newItems)

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-6">
      <h2 className="text-4xl font-bold text-indigo-600">Total Protein in Example Foods</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {newItems.map((item: any, index) => (
          <div key={index} className="flex hover:shadow-md hover:shadow-indigo-400 flex-col items-center p-4 border rounded-lg shadow-sm">
            <Image src={item.img} alt={item.name} width={200} height={200} className="h-48 w-48 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold">{item?.name}</h3>
            <p className="text-xl text-indigo-600">{item?.protein}g of protein</p>
            <p className="text-gray-700">Calories: {item?.calories}</p>
            <p className="text-gray-700">Carbs: {item?.carbs}g</p>
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
      <div>
        <h3 className="text-xl font-semibold text-indigo-600">About Protein</h3>
        <p className="text-gray-700">
          The default goal is 20% of total daily calories from protein. Proteins are essential macronutrients that serve as the building blocks of the body’s tissues and organs. They are involved in vital biochemical functions, including the formation of enzymes and hormones. Major protein sources include meat, poultry, fish, dairy products, legumes, nuts, and seeds. Adequate protein intake is crucial for maintaining muscle mass, especially in aging populations, and for supporting overall health. Balancing protein intake with other macronutrients and choosing lean protein sources can help manage weight and reduce the risk of chronic diseases.
        </p>
      </div>
    </div>
  );
};

export default ProteinInfo;
