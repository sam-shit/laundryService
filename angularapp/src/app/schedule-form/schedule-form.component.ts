import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ScheduleService } from '../services/schedule-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Userschedule } from 'src/models/userschedule.model';

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.css']
})
export class ScheduleFormComponent implements OnInit {
  scheduleForm : FormGroup
  // userschedule : Userschedule
  scheduleForm=this.fb.group({
    fullName:[''],
    mobileNumber:[''],
    email:[''],
    address:[''],
    area:[''],
    pincode:[''],
    pickupDay:[''],
    pickupTimeSlot:[''],
    packageId:['']
  })

  constructor(private ss : ScheduleService , private fb: formBuilder ,private ar : ActivatedRoute , private r : Router) { }

  

  ngOnInit(): void {
  }
  
  // onSubmit() : void {
  // this.userschedule = this.scheduleForm.value
  // this.ss.createSchedule(this.userschedule).subscribe(
  //   () => {
  //     alert("Schedule created Successfully");
      

  // });

  // }
  onSubmit() : void {

  }

}
