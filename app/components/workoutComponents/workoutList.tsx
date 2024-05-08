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

    const getEvents = async () => {
        return axios.get('/api/getEvents').then((res: any) => dispatch(setList(res?.data?.res)));
    }

    const getWorkoutList = async () => {
      return await axios.get('/api/getWorkoutList').then((res) => dispatch(setWorkoutList(res?.data?.workout?.medium_intensity)))
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
          <div className=' bg-violet-900 text-white p-2 flex flex-col rounded-md overflow-scroll'>
            <p className=''>{info?.event?.extendedProps?.muscle}</p>
            <p className=''>Exercise: {info?.event?.extendedProps?.exercise}</p>
            <p>Sets: {info?.event?.extendedProps?.sets}</p>
            <p>Reps: {info?.event?.extendedProps?.reps}</p>
          </div>
        );
      };


    

  return (
    <div className='flex w-full justify-evenly items-center'>
      <div className={`${modalOpen || deleteModal ? 'hidden' : ''} w-[54%]  rounded-xl p-3 `}>
          <FullCalendar
          dayCellClassNames='h-content '
          dayHeaderClassNames='z-10 bg-gradient-to-br from-teal-800 via-teal-600 to-teal-300 text-white font-bold tracking-wider'
          viewClassNames='z-10  h-[27rem] '
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
      </div>

      <div id='drag'  className='w-[25%] flex flex-col justify-evenly items-center gap-2 p-2  h-[38rem] bg-slate-400 rounded-lg' >
      <h1 className='text-4xl text-white font-bolf text-center tracking-wide'>Recommended Workouts</h1>
        {workoutList.map((wl, i:number) => {
          const exercise = wl?.exercise[0].name;
          const sets = wl?.exercise[0].sets;
          const reps = wl?.exercise[0].reps;
          console.log(wl.exercise)
          return (
            <div data-sets={sets} data-reps={reps} data-exercise={exercise} className='fc-workout w-full shadow-lg shadow-violet-200 h-28 flex flex-col justify-evenly items-center overflow-scroll rounded-2xl bg-violet-500' key={i}>
              <h1 className='text-white text-xl font-bold tracking-wide text-center'>{exercise}</h1>
              <div className='flex justify-evenly w-full  items-center'>
                <span className='text-white text-lg font-medium tracking-wide'>sets: {sets}</span>
                <span className='text-white text-lg font-medium tracking-wide'>reps: {reps}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
