import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleServiceService {

  private url = 'https://8080-eccdeabbadafaab307795213daadeafcadfone.premiumproject.examly.io/api/laundry'

  constructor(private httpclient : HttpClient ) { }

  getPackages() : Observable(<any[]>){

    return this.httpclient.get<any[]>(this.url + '/')

  }
}
