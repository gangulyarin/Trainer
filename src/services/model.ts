export class Exercise { 
    constructor( 
      public name: string, 
      public title: string, 
      public description: string, 
      public image: string, 
      public nameSound?: string, 
      public procedure?: string, 
      public videos?: Array<string>) { } 
  } 


  export class ExercisePlan { 
    constructor( 
      public exercise: Exercise, 
      public duration: number) { } 
  } 


  export class WorkoutPlan { 
    constructor( 
      public name: string, 
      public title: string, 
      public restBetweenExercise: number, 
      public exercises: ExercisePlan[], 
      public description?: string) { } 
   
    totalWorkoutDuration(): number {
      if(!this.exercises)
        return 0;

      let total = this.exercises.map((e)=> e.duration).reduce((a,b)=>a+b);
      return total;
      } 
  }