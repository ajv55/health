// utils/processExerciseData.js
interface ExerciseLog {
    name: string;
    sets: { reps: number }[];
  }
  
  interface ProcessedData {
    [exerciseName: string]: {
      sets: number[];
      reps: number[];
    };
  }
  
  export const processExerciseData = (logs: ExerciseLog[]): ProcessedData => {
    const workoutData: ProcessedData = {};
  
    logs?.forEach((log) => {
      if (!workoutData[log.name]) {
        workoutData[log.name] = {
          sets: [],
          reps: [],
        };
      }
  
      log?.sets?.forEach((set, index) => {
        // Ensure that `sets` and `reps` arrays are correctly sized
        if (index >= workoutData[log.name].sets.length) {
          workoutData[log.name].sets.push(0);
          workoutData[log.name].reps.push(0);
        }
  
        workoutData[log.name].sets[index] += 1;
        workoutData[log.name].reps[index] += set.reps;
      });
    });
  
    return workoutData;
  };
  