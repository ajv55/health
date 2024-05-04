'use client';

export default function WorkoutHeader() {

    const handleAddingWorkout = async () => {

    }


  return (
    <div className='w-full flex justify-between items-center p-3 shadow-lg shadow-zinc-900'>
        <h1 className='text-5xl font-bold tracking-wider'>Your Workout Tracker</h1>
        <button className='text-4xl px-2.5 py-3 w-[20%] rounded-3xl bg-gradient-to-br from-cyan-800 via-cyan-600 to-cyan-400 hover:bg-gradient-to-bl hover:from-cyan-800 hover:via-cyan-400 hover:to-cyan-400' onClick={handleAddingWorkout}>Add Workout</button>
    </div>
  )
}
