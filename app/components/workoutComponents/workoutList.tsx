'use client';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import timeGridPlugin from '@fullcalendar/timegrid';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';

export default function WorkoutList() {

    const modalOpen = useSelector((state: RootState) => state.workout.modalOpen);

    const handleDateClick = (arg: any) => {
        alert(arg.dateStr)
      }

  return (
    <div className={`${modalOpen ? 'hidden' : ''} w-[47%]  rounded-xl h-[25rem] p-3  overflow-scroll`}>
        <FullCalendar
        dayHeaderClassNames='z-10'
        viewClassNames='z-10'
        plugins={[ dayGridPlugin, interactionPlugin, timeGridPlugin ]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        events={[
            { title: 'event 1', date: '2024-05-10' },
            { title: 'event 2', date: '2019-04-02' }
        ]}
        headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek'
        }}
        />
    </div>
  )
}
