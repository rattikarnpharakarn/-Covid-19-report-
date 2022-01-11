import { Component, OnInit } from '@angular/core';
import { CovidserviceService } from './covidservice.service';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {

  public data:any;

  constructor(
    private service:CovidserviceService
  ) { }

  ngOnInit(): void {
    this.GetData();
  }

  GetData(){
    this.service.getDataCovid().subscribe((res:any) => {
      this.data = res;
      console.log(res);
    })
  }

}
