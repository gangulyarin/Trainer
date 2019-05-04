import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser'
import {WorkoutRunnerComponentComponent} from 'src/app/components/workout-runner-component/workout-runner-component.component'
import { ExerciseDescriptionComponent } from 'src/app/components/workout-runner-component/exercise-description/exercise-description.component';
import { VideoPlayerComponent } from 'src/app/components/workout-runner-component/video-player/video-player.component';

@NgModule({
  imports: [
    CommonModule, BrowserModule
  ],
  declarations: [WorkoutRunnerComponentComponent, ExerciseDescriptionComponent,
    VideoPlayerComponent
  ],
  exports:[WorkoutRunnerComponentComponent]
})
export class WorkoutRunnerModuleModule {
  
 }
