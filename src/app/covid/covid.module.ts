import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovidComponent } from './covid.component';
import { ReactiveFormsModule } from '@angular/forms';
import { covidRoutingModule } from './covid-routing.module';




@NgModule({
  declarations: [
    CovidComponent
  ],
  imports: [
    CommonModule,
    covidRoutingModule,
    ReactiveFormsModule
  ]
})
export class covidModule { }
