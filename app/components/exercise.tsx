import React from 'react';
import WalkingLunges from './exerciseComponents/walkingLunges';
import JumpingJacks from './exerciseComponents/jumpingJacks';
import PushUp from './exerciseComponents/pushup';
import Plank from './exerciseComponents/planks';

type ExerciseProps = {
    exercise?: string,
    name?: string
}

export default function Exercise({exercise}: ExerciseProps) {
  return (
    <div className='w-full h-[42rem]  '>
        {exercise === 'Walking Lunges' && <WalkingLunges name={exercise} />}
        {exercise === 'Jumping Jacks' && <JumpingJacks />}
        {exercise === 'Reverse Lunges' && <h1>Reverse Lunges</h1>}
        {exercise === 'Push-ups' && <PushUp name={exercise} />}
        {exercise === 'Plank' && <Plank name={exercise}/>}
    </div>

    
  )
}
