import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidserviceService {

  constructor(private http: HttpClient) { }

  /**เรียกข้อมูลโควิดประจำวัน */
  getDataCovid(){
    return this.http.get('https://static.easysunday.com/covid-19/getTodayCases.json');
  }
}
