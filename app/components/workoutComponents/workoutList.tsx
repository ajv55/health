'use client';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin, { Draggable } from "@fullcalendar/interaction" // needed for dayClick
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import {setList, setModalOpen, setWorkoutData, setSelectWorkout, setDeleteModal, setWorkoutList} from '@/app/slices/workoutSlice';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

export default function WorkoutList() {

    const dispatch = useDispatch();
    const [data, setData] = useState({})

 
    const modalOpen = useSelector((state: RootState) => state.workout.modalOpen);
    const deleteModal = useSelector((state: RootState) => state.workout.deleteModal);
    const eventList = useSelector((state: RootState) => state.workout.list);
    const workoutData = useSelector((state: RootState) => state.workout.workoutData);
    const selectWorkout = useSelector((state:RootState) => state.workout.selectWorkout);
    const workoutListObj = useSelector((state: RootState) => state.workout.workoutList);
    const workoutList = Object.values(workoutListObj!); // Convert object to array
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const getEvents = async () => {
        return axios.get('/api/getEvents').then((res: any) => dispatch(setList(res?.data?.res))).catch((error) => console.error('no workout records', error));
    }

    const getWorkoutList = async () => {
      setIsLoading(true)
      return await axios.get('/api/getSearchWorkout').then((res) => dispatch(setWorkoutList(res?.data?.data?.workout?.workouts))).finally(() => setIsLoading(false))
    }

    useEffect(() => {
        getEvents();
        getWorkoutList();

        
        let draggableEl = document.getElementById('drag');
        if(draggableEl) {
          new Draggable(draggableEl, {
            itemSelector: '.fc-workout',
            eventData: function (eventEl){
              const exercises = eventEl.getAttribute('data-exercise');
              const sets = eventEl.getAttribute('data-sets');
              const reps = eventEl.getAttribute('data-reps');
              // console.log(exercises)
              return {
                extendedProps: {
                  exercise: exercises,
                  sets: sets,
                  reps: reps
                }
              };
            }
          })
        }



    }, [])

    const handleDateClick = (arg: any) => {
      dispatch(setModalOpen(true))
      dispatch(setWorkoutData({...workoutData, date: new Date(arg.dateStr)}));
      }

      const handleSelectEvent = (event: any) => {
        dispatch(setDeleteModal(true))
        dispatch(setSelectWorkout({...selectWorkout, id: event?.event?._def?.publicId}));
        console.log('event: ', event?.event?._def?.publicId)
      }

      const handleDropEvent = async (data: any) => {
             const exercises = data?.draggedEl.getAttribute('data-exercise');
             const sets = data?.draggedEl.getAttribute('data-sets');
             const reps = data?.draggedEl.getAttribute('data-sets');
             const date = data?.date
             const workoutData = {exercise: exercises,sets: sets,reps: reps, date: new Date(date), workout: ''}
             await axios.post('/api/postWorkout', {workoutData}).then(() => toast.success('Successfully added a workout 💪🏻')).then(() => getEvents());
        // console.log(workoutData)
      }

      

      const eventRender = (info: any) => {
        // console.log(info?.event?.extendedProps?.sets)
        return (
          <div className=' bg-violet-200 text-zinc-900 p-2 flex flex-col rounded-md overflow-scroll'>
            <p className=''>{info?.event?.extendedProps?.muscle}</p>
            <p className=''>Exercise: {info?.event?.extendedProps?.exercise}</p>
            <p>Sets: {info?.event?.extendedProps?.sets}</p>
            <p>Reps: {info?.event?.extendedProps?.reps}</p>
          </div>
        );
      };

      const newList = workoutList.filter((wl, i) => i <= 6 && wl)

    console.log(eventList)

  return (
    <div className='flex lg:flex-row flex-col w-full justify-evenly items-center'>
      <motion.div  initial={{ x: '-100vw' }} animate={{ x: 0 }}  transition={{ type: 'spring', stiffness: 120, damping: 15 }} className={`${modalOpen || deleteModal ? 'hidden' : ''} lg:w-[60%] w-[97%] bg-gradient-to-tl from-violet-900 via-violet-500 to-violet-300 lg:h-content h-[32rem] drop-shadow-2xl  rounded-xl p-3 `}>
          <FullCalendar

          dayCellClassNames='h-content text-white font-bold text-md '
          dayHeaderClassNames='z-10 bg-gradient-to-br from-slate-200 via-slate-200 text-zinc-900  to-teal-100 text-white font-bold tracking-wider'
          viewClassNames='z-10 text-white text-lg font-bold  h-[23rem] '
          plugins={[ dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin ]}
          initialView="dayGridMonth"
          dateClick={handleDateClick}
          events={eventList}
          eventContent={eventRender}
          eventClick={handleSelectEvent}
          drop={(data) => handleDropEvent(data)}
          headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,listWeek'
          }}
          />
      </motion.div>

      <div id='drag'  className='w-[34%] hidden lg:flex flex-wrap justify-evenly items-center gap-2 p-2  h-[38rem] bg-slate-200 shadow-xl shadow-zinc-800 rounded-lg' >
       <h1 className={`${isLoading ? 'hidden' : ''} text-4xl  font-bold text-center w-full tracking-wide`}>Recommended Workouts</h1> 
      {isLoading && <div className='w-full flex flex-wrap  justify-center items-center h-full animate-pulse  rounded sm:w-96 dark:bg-gray-700'>
        <div className='w-[20%] flex flex-wrap  justify-center items-center h-20    bg-gray-300 rounded sm:w-96 dark:bg-gray-700' ></div>
        <div className='w-[20%] flex flex-wrap  justify-center items-center h-20   bg-gray-500 rounded sm:w-96 dark:bg-gray-700' ></div>
        <div className='w-[20%] flex flex-wrap  justify-center items-center h-20   bg-gray-300 rounded sm:w-96 dark:bg-gray-700' ></div>
        <div className='w-[20%] flex flex-wrap  justify-center items-center h-20   bg-gray-300 rounded sm:w-96 dark:bg-gray-700' ></div>
        <div className='w-[20%] flex flex-wrap  justify-center items-center h-20   bg-gray-300 rounded sm:w-96 dark:bg-gray-700' ></div>
        </div>}
        {newList.map((nl, i) => {
          console.log(nl)
          const sets = nl?.sets;
          const reps = nl?.reps;
          const exercise = nl?.name;
          return (
             <div key={i} data-sets={sets} data-reps={reps} data-exercise={exercise} className='fc-workout w-[45%] shadow-lg drop-shadow-xl shadow-violet-800 h-28 flex flex-col justify-evenly items-center overflow-scroll rounded-2xl bg-violet-500' >
              <h1 className='text-white text-xl font-bold tracking-wide text-center'>{exercise}</h1>
              <div className='flex justify-evenly w-full  items-center'>
                <span className='text-white text-center text-lg font-medium tracking-wide'>sets <br /> {sets}</span>
                <span className='text-white text-center  text-lg font-medium tracking-wide'>reps <br /> {reps}</span>
              </div>
            </div>
            
          )
        })}


        
      </div>

      
    </div>
  )
}
