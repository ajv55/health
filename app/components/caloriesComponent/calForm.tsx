import { ChangeEvent, FormEvent } from "react"

type CalFormProps = {
    CancelBtnOnClick?: () => void,
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    selectValue?: string,
    selectOnChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    foodValue?: string,
    foodOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void ,
    caloriesValue?: number,
    caloriesOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void 

}

export default function CalForm({CancelBtnOnClick, selectValue, selectOnChange, foodValue, foodOnChange, caloriesValue, caloriesOnChange, onSubmit}: CalFormProps) {
  return (
    <div className='w-full absolute bg-transparent top-0 left-0 backdrop-blur-sm h-screen flex  justify-center items-center'>
        
        <form onSubmit={onSubmit} className='w-[40%] h-content bg-slate-100 drop-shadow-2xl rounded-2xl flex flex-col justify-start p-3 gap-4 items-center'>
        <div className="w-full flex flex-col justify-start items-start px-4 py-2">
            <h1 className="text-4xl font-bold tracking-wide">Calorie Tracker</h1>
            <h5 className="text-xl font-light tracking-wider text-zinc-500">Log your meals and track your calories.</h5>
        </div>
        <label htmlFor="small" className="block mb-1 w-full text-xl font-bold  dark:text-white">Meal Type</label>
        <select value={selectValue} onChange={selectOnChange}  id="small"  className="block w-full px-3 py-2 drop-shadow-md border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300">
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
        </select>
        <div className="w-full">
           <label className="w-full text-xl font-bold" htmlFor="food">Food Item</label>
           <input value={foodValue} onChange={foodOnChange} className="block w-full px-3 py-2 border drop-shadow-md border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300" id="food" type="text"  />
        </div>
        <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="calories">
                Calories
            </label>
            <input
            value={caloriesValue}
            onChange={caloriesOnChange}
            className="block w-full px-3 py-2 border drop-shadow-md border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
            id="calories"
            placeholder="Enter calories"
            type="number"
            />
        </div>
        <button type='submit' className="w-full inline-flex mt-5 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white hover:text-black bg-indigo-600 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600">Log Meal</button>
        <button onClick={CancelBtnOnClick} className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-indigo-400 hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600" type="submit">Cancel</button>
        </form>

    </div>
  )
}
