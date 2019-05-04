import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router'
import { StartComponent } from '../components/start.component';
import { FinishComponent } from '../components/finish.component';
import { WorkoutRunnerComponentComponent } from '../components/workout-runner-component/workout-runner-component.component';

const routes:Routes = [
  {path:'start', component:StartComponent},
  {path:'finish', component:FinishComponent},
  {path:'workout', component:WorkoutRunnerComponentComponent},
  {path:'**', redirectTo:'/start'}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{enableTracing:true})
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
