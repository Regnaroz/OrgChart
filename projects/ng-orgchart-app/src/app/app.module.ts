import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PanZoomChartComponent } from './pan-zoom-chart/pan-zoom-chart.component';

import { OrgchartModule } from 'projects/ng-orgchart/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
     PanZoomChartComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    OrgchartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
