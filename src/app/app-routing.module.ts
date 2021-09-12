import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAnalyticsComponent } from './components/all-analytics/all-analytics.component';
import { AnalyticsByYearAndShortLongComponent } from './components/analytics-by-year-and-short-long/analytics-by-year-and-short-long.component';
import { AnalyticsByYearComponent } from './components/analytics-by-year/analytics-by-year.component';

const routes: Routes = [
  {path: 'all-analytics', component: AllAnalyticsComponent},
  {path: 'analytics-by-year', component: AnalyticsByYearComponent},
  {path: 'analytics-by-year-and-short-long', component: AnalyticsByYearAndShortLongComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
