import React from 'react'

type CaloriesTableProps = {
    mealType?: string,
    foodName?: string,
    protein?: number,
    carbs?: string,
    fat?: string
}

export default function CaloriesTable({mealType, foodName, protein, carbs, fat}: CaloriesTableProps) {
  return (
    

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            {mealType}
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Protein
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Carbs
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Fats
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                            {foodName} 
                        </th>
                        <td className="px-6 py-4">
                            {protein} g
                        </td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            {carbs} g
                        </td>
                        <td className="px-6 py-4">
                            {fat} g
                        </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                            Microsoft Surface Pro
                        </th>
                        <td className="px-6 py-4">
                            White
                        </td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            Laptop PC
                        </td>
                        <td className="px-6 py-4">
                            $1999
                        </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                            Magic Mouse 2
                        </th>
                        <td className="px-6 py-4">
                            Black
                        </td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            Accessories
                        </td>
                        <td className="px-6 py-4">
                            $99
                        </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                            Google Pixel Phone
                        </th>
                        <td className="px-6 py-4">
                            Gray
                        </td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            Phone
                        </td>
                        <td className="px-6 py-4">
                            $799
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                            Apple Watch 5
                        </th>
                        <td className="px-6 py-4">
                            Red
                        </td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            Wearables
                        </td>
                        <td className="px-6 py-4">
                            $999
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

  )
}
