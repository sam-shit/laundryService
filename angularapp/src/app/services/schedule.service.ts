import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private httpclient : HttpClient) { }

  private url = 'https://8080-addabcfedcbbadfabcaaaceeafebeccaddbefddaf.premiumproject.examly.io/api'

  httpOptions = {headers : new HttpHeaders({'Context-type' : 'application/json'})}

  createSchedule(userSchedule : any) : Observable<any> {
    return this.httpclient.post<any>(this.url + '/laundry/schedule/add', userSchedule, this.httpOptions)
  }

  getPackages() : Observable<any[]> {
    return this.httpclient.get<any[]>(this.url + '/laundry/packages')
  }

  getSchedule() : Observable<any[]> {
    return this.httpclient.get<any>(this.url + '/laundry/schedules')
  }

  getStatus() : Observable<any[]> {
    return this.httpclient.get<any[]>(this.url + '/laundry/status')
  }

  updateSchedule(id : number, statusId : number) : Observable<any> {
    return this.httpclient.put<any>(this.url + '/laundry/schedule/update/' + id + '/' + statusId, this.httpOptions)
  }

  deleteSchedule(id : number) : Observable<any> {
    return this.httpclient.delete<any>(this.url + '/laundry/schedule/delete/' + id, this.httpOptions)
  }
}
