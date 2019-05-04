import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing/app-routing.module';

import {WorkoutRunnerModuleModule} from './workout-runner-module/workout-runner-module.module'
import { AppComponent } from './app.component';
import { SecondsToTimePipe } from './seconds-to-time.pipe';
import { StartComponent } from './components/start.component';
import { FinishComponent } from './components/finish.component';
import { CoreModule } from './core/core.module';


//import { WorkoutRunnerComponentComponent } from './components/workout-runner-component/workout-runner-component.component';
//import { ExerciseDescriptionComponent } from './components/workout-runner-component/exercise-description/exercise-description.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondsToTimePipe,
    StartComponent,
    FinishComponent
    //ExerciseDescriptionComponent
  ],
  imports: [
    BrowserModule,WorkoutRunnerModuleModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
