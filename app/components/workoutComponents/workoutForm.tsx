
type WorkoutFormProps = {
    handleCancel: () => void;
}

export default function WorkoutForm({handleCancel}: WorkoutFormProps) {
  return (
    <div className='w-full absolute top-0 left-0 h-screen flex justify-center items-center bg-transparent backdrop-blur-md'>
        <div className='w-[45%] h-content p-4 bg-slate-900 rounded-xl drop-shadow-xl'>
        <h2 className="text-3xl text-white font-bold mb-4">Log Your Workout</h2>
            <form className="flex flex-wrap justify-evenly items-center gap-5" >
                <div className="mb-4 w-[45%]">
                    <label htmlFor="muscleGroup" className="block text-white font-medium mb-2">Muscle Group</label>
                    <input
                        type="text"
                        id="muscleGroup"
                        className="w-full  border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                        placeholder="E.g., Chest, Back, Legs"
                        
                        required
                    />
                </div>
                <div className="mb-4 w-[45%]">
                    <label htmlFor="exercise" className="block text-white font-medium mb-2">Exercise</label>
                    <input
                        type="text"
                        id="exercise"
                        className="w-full  border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                        placeholder="E.g., Bench Press, Squats, Deadlifts"
                        
                        required
                    />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className=" w-[45%] mb-4">
                        <label htmlFor="sets" className="block text-white font-medium mb-2">Sets</label>
                        <input
                            type="number"
                            id="sets"
                            className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                            placeholder="Number of sets"
                            
                            required
                        />
                    </div>
                    <div className=" w-[45%] mb-4">
                        <label htmlFor="reps" className="block text-white font-medium mb-2">Reps</label>
                        <input
                            type="number"
                            id="reps"
                            className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                            placeholder="Number of reps per set"
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Log Workout
                </button>
                <button onClick={handleCancel} type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Cancel
                </button>
            </form>

        </div>
    </div>
  )
}
