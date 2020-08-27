import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  readonly baseurl = 'http://ec2-3-12-227-242.us-east-2.compute.amazonaws.com:4007/api/forms/';
  constructor(private https: HttpClient) { }

  RequestDemo(emp: any) {
    return this.https.post(this.baseurl + 'RequestDemo', emp);
  }
  TalkToExpert(emp: any) {
    return this.https.post(this.baseurl + 'TalkToExpert', emp);
  }
  LendingPartner(emp: any) {
    return this.https.post(this.baseurl + 'LendingPartner', emp);
  }
  BuisnessServicePartner(emp: any) {
    return this.https.post(this.baseurl + 'BuisnessServicePartner', emp);
  }
  GetInTouch(emp: any) {
    return this.https.post(this.baseurl + 'GetInTouch', emp);
  }
}
