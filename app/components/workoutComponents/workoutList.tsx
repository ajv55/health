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
              const exercises = eventEl.getAttribute('data-exercise')
              console.log(exercises)
              return {
                extendedProps: {
                  exercise: exercises
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

      

      const eventRender = (info: any) => {
        return (
          <div className=' bg-teal-500 p-2 rounded-md overflow-scroll'>
            <p className=''>{info?.event?.extendedProps?.muscle}</p>
            <p className=''>Exercise: {info?.event?.extendedProps?.exercise}</p>
          </div>
        );
      };


    

  return (
    <div className='flex w-full justify-evenly items-center'>
      <div className={`${modalOpen || deleteModal ? 'hidden' : ''} w-[54%]  rounded-xl p-3 `}>
          <FullCalendar
          dayCellClassNames=''
          dayHeaderClassNames='z-10'
          viewClassNames='z-10 h-[27rem] '
          plugins={[ dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin ]}
          initialView="dayGridMonth"
          dateClick={handleDateClick}
          events={eventList}
          eventContent={eventRender}
          eventClick={handleSelectEvent}
          headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,listWeek'
          }}
          />
      </div>

      <div id='drag'  className='w-[25%]  h-[32rem] bg-slate-400 rounded-lg' >
        {workoutList.map((wl, i: number) => {
          const exerciseList = wl?.exercise
          const names = exerciseList.map((el: any) =>  el.name);
        return (
          <div data-exercise={names}  className='fc-workout w-full h-22 flex flex-wrap justify-start items-center overflow-scroll rounded-2xl bg-violet-500' key={i}>
            <h1 id={names} className='text-3xl  font-bold'>{names}</h1>
          </div>
        )
      })
}
      </div>
    </div>
  )
}
