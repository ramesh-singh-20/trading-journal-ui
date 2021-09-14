import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllAnalyticsComponent } from './components/all-analytics/all-analytics.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AnalyticsByYearMonthComponent } from './components/analytics-by-year-month/analytics-by-year-month.component';
import { AnalyticsByYearComponent } from './components/analytics-by-year/analytics-by-year.component';
import { AnalyticsByYearAndShortLongComponent } from './components/analytics-by-year-and-short-long/analytics-by-year-and-short-long.component';
import {MatSelectModule} from '@angular/material/select';
import { AnalyticsByYearAndTradeTypeComponent } from './components/analytics-by-year-and-trade-type/analytics-by-year-and-trade-type.component';
import { AnalyticsByYearAndChartPatternComponent } from './components/analytics-by-year-and-chart-pattern/analytics-by-year-and-chart-pattern.component';

@NgModule({
  declarations: [
    AppComponent,
    AllAnalyticsComponent,
    SideNavComponent,
    AnalyticsByYearMonthComponent,
    AnalyticsByYearComponent,
    AnalyticsByYearAndShortLongComponent,
    AnalyticsByYearAndTradeTypeComponent,
    AnalyticsByYearAndChartPatternComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatSelectModule
  ],
  exports :[
    MatTableModule,
    MatSelectModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
