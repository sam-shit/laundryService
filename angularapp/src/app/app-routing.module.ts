import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleFormComponent } from './schedule-form/schedule-form.component';
import { ScheduleDetailsComponent } from './schedule-details/schedule-details.component';


const routes: Routes = [
  {path : 'createSchedule', component : ScheduleFormComponent},
  {path : 'details', component : ScheduleDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
