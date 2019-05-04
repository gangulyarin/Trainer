import { Injectable } from '@angular/core';
import { CoreModule } from './core.module'
import { ExercisePlan } from 'src/services/model';

@Injectable({
  providedIn: CoreModule
})
export class WorkoutHistoryTrackerService {

  private maxHistoryItems = 20;   //Tracking last 20 exercises 
  private currentWorkoutLog: WorkoutLogEntry = null; 
  private workoutHistory: Array<WorkoutLogEntry> = []; 
  private  workoutTracked: boolean;
  constructor() { }

  getTracking(): boolean{
    return this.workoutTracked;
  }

  getHistory(): Array<WorkoutLogEntry> { 
    return this.workoutHistory; 
  }

  stratTracking(){
    this.workoutTracked=true;
    this.currentWorkoutLog=new WorkoutLogEntry(new Date());
    if(this.workoutHistory.length>this.maxHistoryItems){
      this.workoutHistory.shift();
    }
    this.workoutHistory.push(this.currentWorkoutLog);
  }

  exerciseComplete(exercisePlan: ExercisePlan){
    this.currentWorkoutLog.lastExercise=exercisePlan.exercise.title;
    ++this.currentWorkoutLog.exercisesDone;
  }

  endTracking(completed: boolean) { 
    this.currentWorkoutLog.completed = completed; 
    this.currentWorkoutLog.endedOn = new Date(); 
    this.currentWorkoutLog = null; 
    this.workoutTracked = false; 
  }
}
export class WorkoutLogEntry { 
  constructor( 
    public startedOn: Date, 
    public completed: boolean = false, 
    public exercisesDone: number = 0, 
    public lastExercise?: string, 
    public endedOn?: Date) { } 
}
