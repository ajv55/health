'use client';
import { AnimatePresence, motion } from "framer-motion";
import WorkoutForm from "./workoutForm";
import {  useDispatch, useSelector } from 'react-redux';
import { RootState } from "@/app/store";
import {setModalOpen, setWorkoutList} from '@/app/slices/workoutSlice'
import DeleteModal from "./deleteModal";
import React, { useEffect, useState } from "react";
import { setSearchWorkout,setIsLoading } from "@/app/slices/searchWorkoutSlice"; 
import axios from "axios";
import Link from "next/link";
import { useRouter, useSearchParams} from "next/navigation";





export default function WorkoutHeader() {
   
    const router: any = useRouter();
    const searchParams = useSearchParams();

    const modalOpen = useSelector((state: RootState) => state.workout.modalOpen);
    const searchWorkouts = useSelector((state: RootState) => state.searchWorkout.list);
    const deleteModal = useSelector((state: RootState) => state.workout.deleteModal);
    const dispatch = useDispatch();
    const workoutData = useSelector((state: RootState) => state.workout.workoutData);
    const [searchValue, setSearchValue] = useState('');
    const [filteredWorkouts, setFilteredWorkouts] = useState<any>([]);

    const getSearchWorkout = async () => {
        dispatch(setIsLoading(true))
        return await axios.get('/api/getSearchWorkout').then((res) => dispatch(setSearchWorkout(res?.data?.data?.workout?.workouts))).finally(() => dispatch(setIsLoading(false)))
    }

    useEffect(() => {
        getSearchWorkout();
    }, [])



  console.log(searchWorkouts)


    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
      event.preventDefault();
      // Filter workouts based on search term and pass the filtered list to the parent component
      const filteredWorkouts = searchWorkouts?.filter((workout: any) =>
          workout.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredWorkouts(filteredWorkouts)
      searchWorkouts.map((sw: any) => {
        
        if(searchValue.toLowerCase() === sw?.name?.toLowerCase()){
            console.log(sw)
           router.push(`/dashboard/workout/${sw.name}?name=${sw.name}&description=${sw.description}`)
        }
      })
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchValue(term);

    // Filter workouts based on search term
    const filtered = term
        ? searchWorkouts.filter((workout: any) =>
            workout.name.toLowerCase().includes(term.toLowerCase())
        )
        : [];
    setFilteredWorkouts(filtered);
};

    console.log(filteredWorkouts)


  return (
    <div className='w-full flex relative justify-between items-center p-3 shadow-lg shadow-zinc-900'>

        <AnimatePresence>{modalOpen && <WorkoutForm />}</AnimatePresence>
        <AnimatePresence>{deleteModal && <DeleteModal />}</AnimatePresence>
        <h1 className='lg:text-5xl text-xl font-bold tracking-wider'>Workout Tracker</h1>
        <form className="lg:w-[35%] w-[45%]  relative" onSubmit={handleSubmit}>
           <input value={searchValue} onChange={handleChange} type="text" placeholder="Search for exercise..." className="w-full rounded-xl h-10 p-2  lg:text-xl text-md" />
           <motion.ul
                className="absolute bg-slate-100  font-bold tracking-wide text-xl  z-30 w-full p-3 rounded-xl  top-full left-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: filteredWorkouts.length > 0 ? 1 : 0, y: filteredWorkouts.length > 0 ? 0 : 20 }}
                exit={{ opacity: 0, y: 20 }}
            >
                {filteredWorkouts.map((workout: any) => (
                    <Link key={workout.id} href={{
                        pathname: `/dashboard/workout/${workout?.name.toLowerCase()}`,
                        query: {
                            name: workout?.name,
                            description: workout?.description,
                            video: workout?.demoVideo as string
                        }
                    }}><motion.li className='cursor-pointer hover:bg-slate-800 hover:text-white'  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>{workout.name}</motion.li></Link>
                ))}
            </motion.ul>
            <AnimatePresence>
                {searchValue !== '' && filteredWorkouts.length === 0 && (
                    <motion.p
                        className="w-full top-full bg-slate-100 h-[6rem] z-30 left-0 absolute overflow-scroll rounded-xl flex justify-center items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                    >
                        No matching workouts found.
                    </motion.p>
                )}
            </AnimatePresence>
        </form>
        <button className='lg:text-4xl text-xl px-2.5 py-3 lg:w-[20%] w-[50%] rounded-3xl bg-gradient-to-br from-violet-800 via-violet-600 to-violet-400 text-white hover:bg-gradient-to-bl hover:from-violet-800 hover:via-violet-400 hover:to-violet-400' onClick={() => dispatch(setModalOpen(!modalOpen))}>Add Workout</button>
    </div>
  )
}
