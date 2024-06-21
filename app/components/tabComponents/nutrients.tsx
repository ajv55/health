import React from 'react'

type NutrientsProps = {
    calculatedMacros?: any
}

export default function Nutrients({calculatedMacros}: NutrientsProps) {
  return (
    <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Calculated Grams</h3>
    <div className="space-y-4">
        <div className="flex justify-between items-center border-b pb-2">
            <p className="text-lg text-gray-700">Protein</p>
            <p className="text-lg text-indigo-600">{calculatedMacros?.proteinGrams.toFixed(1)}g <span className="text-gray-500">({calculatedMacros.proteinPercent}%)</span></p>
        </div>
        <div className="flex justify-between items-center border-b pb-2">
            <p className="text-lg text-gray-700">Carbs</p>
            <p className="text-lg text-indigo-600">{calculatedMacros?.carbGrams.toFixed(1)}g <span className="text-gray-500">({calculatedMacros.carbPercent}%)</span></p>
        </div>
        <div className="flex justify-between items-center border-b pb-2">
            <p className="text-lg text-gray-700">Fats</p>
            <p className="text-lg text-indigo-600">{calculatedMacros?.fatGrams.toFixed(1)}g <span className="text-gray-500">({calculatedMacros.fatPercent}%)</span></p>
        </div>
        <div className="flex justify-between items-center border-b pb-2">
            <p className="text-lg text-gray-700">Saturated Fat</p>
            <p className="text-lg text-indigo-600">{calculatedMacros?.satFatGrams.toFixed(1)}g</p>
        </div>
        <div className="flex justify-between items-center border-b pb-2">
            <p className="text-lg text-gray-700">Trans Fat</p>
            <p className="text-lg text-indigo-600">{calculatedMacros?.transFatGrams.toFixed(1)}g</p>
        </div>
        <div className="flex justify-between items-center border-b pb-2">
            <p className="text-lg text-gray-700">Sodium</p>
            <p className="text-lg text-indigo-600">{calculatedMacros?.sodiumMg}mg</p>
        </div>
        <div className="flex justify-between items-center border-b pb-2">
            <p className="text-lg text-gray-700">Calcium</p>
            <p className="text-lg text-indigo-600">{calculatedMacros?.calciumMg}mg</p>
        </div>
        <div className="flex justify-between items-center">
            <p className="text-lg text-gray-700">Fiber</p>
            <p className="text-lg text-indigo-600">{calculatedMacros?.fiberGrams.toFixed(1)}g</p>
        </div>
    </div>
</div>

  )
}
