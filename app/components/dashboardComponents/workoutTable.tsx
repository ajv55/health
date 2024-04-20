import React from 'react'

type WorkoutTableProps = {
    day?: string,
    exerciseName?: string,
    exerciseName2?: string,
    exerciseName3?: string,
    exercise1reps?: string,
    exercise2reps?: string,
    exercise3reps?: string,
    exercise1sets?: string,
    exercise2sets?: string,
    exercise3sets?: string,

}

export default function WorkoutTable({day,exerciseName, exerciseName2, exerciseName3, exercise1reps, exercise2reps, exercise3reps, exercise1sets, exercise2sets, exercise3sets}: WorkoutTableProps) {
  return (
    

        <div className="w-full overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 text-2xl py-3">
                            {day}
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Sets
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Reps
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {exerciseName}
                        </th>
                        <td className="px-6 py-4">
                            {exercise1sets}
                        </td>
                        <td className="px-6 py-4">
                            {exercise1reps}
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           {exerciseName2}
                        </th>
                        <td className="px-6 py-4">
                           {exercise2sets}
                        </td>
                        <td className="px-6 py-4">
                             {exercise2reps}
                        </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {exerciseName3}
                        </th>
                        <td className="px-6 py-4">
                           {exercise3sets}
                        </td>
                        <td className="px-6 py-4">
                            {exercise3reps}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

  )
}
