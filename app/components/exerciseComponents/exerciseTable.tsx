import React from 'react';

type ExerciseTableProps = {
    exercise1?: string,
    exercise2?: string,
    exercise3?: string,
    exercise1reps?: string,
    exercise2reps?: string,
    exercise3reps?: string,
    exercise1sets?: string,
    exercise2sets?: string,
    exercise3sets?: string
}

export default function ExerciseTable({exercise1, exercise2, exercise3, exercise1reps, exercise2reps, exercise3reps, exercise1sets, exercise2sets, exercise3sets} : ExerciseTableProps) {
  return (
        

<div className=" bg-slate-400 w-full shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs border-b border-gray-500 text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 text-4xl text-center tracking-wide font-bold py-3 bg-gray-50 dark:bg-gray-800">
                    Workouts
                </th>
                <th scope="col" className="px-6 border-b border-gray-200 text-4xl text-center tracking-wide font-bold text-white py-3">
                    Sets 
                </th>
                <th scope="col" className="px-6 text-4xl text-center tracking-wide font-bold py-3 bg-gray-50 dark:bg-gray-800">
                    Reps
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="border-b border-gray-500 dark:border-gray-700">
                <th scope="row" className="px-6 text-center text-2xl tracking-wide py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    {exercise1}
                </th>
                <td className="px-6 text-4xl border-b border-gray-200 text-center text-white tracking-wide py-4">
                    {exercise1sets} <br /> <span className='text-lg font-light text-white tracking-wider'>per/exercise</span>
                </td>
                <td className="px-6 text-2xl text-center tracking-wide py-4 bg-gray-50 dark:bg-gray-800">
                {exercise1reps} <br /> <span className='text-lg font-light  tracking-wider'>per/set</span>
                </td>
            </tr>
            <tr className="border-b border-gray-500 dark:border-gray-700">
                <th scope="row" className="px-6 text-center text-2xl tracking-wide py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    {exercise2}
                </th>
                <td className="px-6 text-4xl border-b border-gray-200 text-white text-center tracking-wide py-4">
                    {exercise2sets} <br /> <span className='text-lg font-light text-white tracking-wider'>per/exercise</span>
                </td>
                <td className="px-6 text-2xl text-center tracking-wide py-4 bg-gray-50 dark:bg-gray-800">
                {exercise2reps} <br /> <span className='text-lg font-light  tracking-wider'>per/set</span>
                </td>
            </tr>
            <tr className="border-b border-gray-500 dark:border-gray-700">
                <th scope="row" className="px-6 text-center text-2xl tracking-wide py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                {exercise3}
                </th>
                <td className="px-6 text-4xl text-center text-white tracking-wide py-4">
                    {exercise3sets} <br /> <span className='text-lg font-light text-white tracking-wider'>per/exercise</span>
                </td>
                <td className="px-6 text-2xl text-center tracking-wide py-4 bg-gray-50 dark:bg-gray-800">
                {exercise3reps} <br /> <span className='text-lg font-light  tracking-wider'>per/set</span>
                </td>
            </tr>
        </tbody>
    </table>
</div>

  )
}
