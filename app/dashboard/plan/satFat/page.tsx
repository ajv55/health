import Image from 'next/image'
import React from 'react'

export default function Page() {
  return (
    <div className="p-6 bg-indigo-50 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-indigo-700 mb-4">Saturated Fat in Example Foods</h2>
    <div className="flex justify-around mb-4">
      <div className="text-center">
        <Image src="/images/cheese.png" width={200} height={200} alt="Cheese" className="h-20 mx-auto mb-2" />
        <p className="text-lg font-semibold text-indigo-700">Cheese</p>
        <p className="text-sm text-indigo-500">100g</p>
        <p className="text-xl text-indigo-700">~20g</p>
      </div>
      <div className="text-center">
        <Image src="/images/sausage.png" width={200} height={200} alt="Pork sausage" className="h-20 mx-auto mb-2" />
        <p className="text-lg font-semibold text-indigo-700">Pork sausage</p>
        <p className="text-sm text-indigo-500">100g</p>
        <p className="text-xl text-indigo-700">~10g</p>
      </div>
      <div className="text-center">
        <Image src="/images/coconut_oil.png" width={200} height={200} alt="Coconut oil" className="h-20 mx-auto mb-2" />
        <p className="text-lg font-semibold text-indigo-700">Coconut oil</p>
        <p className="text-sm text-indigo-500">100g</p>
        <p className="text-xl text-indigo-700">~87g</p>
      </div>
    </div>
    <div className="bg-indigo-100 p-4 rounded-lg">
      <h3 className="text-lg font-bold text-indigo-700 mb-2">About Saturated Fat</h3>
      <p className="text-sm text-indigo-600">
        The 2015 U.S. Dietary Guidelines recommend no more than 10% of total calories come from saturated fats. For your 2,174cals budget that is 24g. Saturated fats are solid at room temperature and come from full-fat dairy products, meat, poultry, and tropical fats such as coconut and palm oils. A diet very high saturated fat intake can raise LDL (bad) cholesterol in your blood. A high LDL level increases risk for heart disease.
      </p>
      <div className="mt-4 flex justify-between">
        <a href="#" className="text-indigo-700 underline">READ ARTICLE</a>
        <a href="#" className="text-indigo-700 underline">RELATED NUTRIENTS</a>
      </div>
    </div>
  </div>
  )
}
