import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAnalyticsComponent } from './components/all-analytics/all-analytics.component';
import { AnalyticsByYearComponent } from './components/analytics-by-year/analytics-by-year.component';

const routes: Routes = [
  {path: 'all-analytics', component: AllAnalyticsComponent},
  {path: 'analytics-by-year', component: AnalyticsByYearComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
