import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ScheduleService } from '../services/schedule-service.service';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.css']
})
export class ScheduleFormComponent implements OnInit {
  [x: string]: any;

  // scheduleForm : FormGroup

  constructor(private ss : ScheduleService , private ar : ActivatedRoute , private r : Router) { }

  ngOnInit(): void {
  }
  // onSubmit() : void{
    
  // }

}
