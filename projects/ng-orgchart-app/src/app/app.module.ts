import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultChartComponent } from './default-chart/default-chart.component';
import { HomeComponent } from './home/home.component';
import { CustomNodeTemplateChartComponent } from './custom-node-template-chart/custom-node-template-chart.component';
import { PanZoomChartComponent } from './pan-zoom-chart/pan-zoom-chart.component';
import { EditChartComponent } from './edit-chart/edit-chart.component';
import { OrgchartModule } from 'projects/ng-orgchart/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    DefaultChartComponent,
    HomeComponent,
    CustomNodeTemplateChartComponent,
    PanZoomChartComponent,
    EditChartComponent
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
