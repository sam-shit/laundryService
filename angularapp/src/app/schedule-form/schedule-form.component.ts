import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../services/schedule.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { UserSchedule } from 'src/models/user-schedule';

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.css']
})
export class ScheduleFormComponent implements OnInit {

  constructor(private ms : ScheduleService, private router : Router, private fb : FormBuilder) { }
  userSchedule : UserSchedule
  packages : any[] = []
  scheduleForm = this.fb.group({
    fullName : [''],
    mobileNumber : [''],
    email : [''],
    address : [''],
    area : [''],
    pincode : [''],
    pickupDay : [''],
    pickupTimeSlot : [''],
    packageId : [''],
    statusId : ['1']
  })

  onSubmit() : void {
    this.userSchedule = this.scheduleForm.value
    this.ms.createSchedule(this.userSchedule).subscribe(() => {
      alert("Record Added")
      this.router.navigate(['/scheduleDetails'])
    })
  }


  ngOnInit() {
    this.ms.getPackages().subscribe(data => {this.packages.push(...data)})
    console.log(this.packages)
  }

}
