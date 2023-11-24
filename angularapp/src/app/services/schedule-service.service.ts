import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Userschedule } from 'src/models/userschedule.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleServiceService {

  private url = 'https://8080-eccdeabbadafaab307795213daadeafcadfone.premiumproject.examly.io/api/laundry';

  constructor(private htttpclient : HttpClient) { }

  getPackages() : Observable<any[]>{
    return this.htttpclient.get<any[]>(this.url + '/packages');
  }
  getStatuses() : Observable<any[]>{
    return this.htttpclient.get<any[]>(this.url + '/packages');
  }
 

}
