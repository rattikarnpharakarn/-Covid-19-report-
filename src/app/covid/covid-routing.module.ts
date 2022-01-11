import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CovidComponent } from './covid.component';

const routes: Routes = [
  { path: '**', redirectTo: '/covid', pathMatch: 'full' },
  { path: 'covid', component: CovidComponent}
 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class covidRoutingModule { }
