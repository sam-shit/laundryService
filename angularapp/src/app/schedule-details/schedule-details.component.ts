import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../services/schedule.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.css']
})
export class ScheduleDetailsComponent implements OnInit {

  constructor(private ms : ScheduleService, private ar : ActivatedRoute, private fb : FormBuilder, private router : Router) { }
  status : any[] = []
  id : number
  statusId : number
  statusDetail : any
  schedules : any[] = []

  onSubmit(id : number, statusId : number) : void {
    // this.statusDetail = this.statusForm.value
    this.ms.updateSchedule(id, statusId).subscribe(() => {
      alert("Updated")
      this.router.navigate(['/details'])
    })
  }

  delete(id : number) : void {
    this.ms.deleteSchedule(id).subscribe(() => {
      alert('deleted')
      this.router.navigate(['/details'])
    })
  }

  ngOnInit() {
    this.ms.getSchedule().subscribe(data => {this.schedules.push(...data)})
    this.ms.getStatus().subscribe(data => {this.status.push(...data)})
    console.log(this.status)


}
