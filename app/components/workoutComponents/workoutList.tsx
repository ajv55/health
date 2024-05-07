'use client';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import {setList, setModalOpen, setWorkoutData} from '@/app/slices/workoutSlice';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function WorkoutList() {

    const dispatch = useDispatch();
    const [data, setData] = useState({})
    const [selectEvent, setSelectEvent] = useState({});

 
    const modalOpen = useSelector((state: RootState) => state.workout.modalOpen);
    const eventList = useSelector((state: RootState) => state.workout.list);
    const workoutData = useSelector((state: RootState) => state.workout.workoutData);

    const getEvents = async () => {
        return axios.get('/api/getEvents').then((res: any) => dispatch(setList(res?.data?.res)));
    }

    useEffect(() => {
        getEvents();
    }, [])

    const handleDateClick = (arg: any) => {
      dispatch(setModalOpen(true))
      dispatch(setWorkoutData({...workoutData, date: new Date(arg.dateStr)}))
      }

      const handleSelectEvent = (event: any) => {
        setSelectEvent(event?.event?._def?.extendedProps);
        console.log('event: ',selectEvent )
      }

      const eventRender = (info: any) => {
        console.log(info?.event?.extendedProps)
        return (
          <div className=' overflow-scroll'>
            <p className=''>{info?.event?.extendedProps?.muscle}</p>
            <p>Exercise: {info?.event?.extendedProps?.exercise}</p>
          </div>
        );
      };

      console.log(workoutData)

  return (
    <div className='flex w-full justify-evenly items-center'>
      <div className={`${modalOpen ? 'hidden' : ''} w-[54%]  rounded-xl p-3 `}>
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

      <div className='w-[25%]  h-[32rem] bg-slate-400 rounded-lg' >

      </div>
    </div>
  )
}
