import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PanZoomChartComponent } from './pan-zoom-chart/pan-zoom-chart.component';


const routes: Routes = [
  { path: '', component: PanZoomChartComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
