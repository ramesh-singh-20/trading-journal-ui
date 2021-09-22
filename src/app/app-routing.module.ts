import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAnalyticsComponent } from './components/all-analytics/all-analytics.component';
import { AnalyticsByYearAndChartPatternComponent } from './components/analytics-by-year-and-chart-pattern/analytics-by-year-and-chart-pattern.component';
import { AnalyticsByYearAndShortLongComponent } from './components/analytics-by-year-and-short-long/analytics-by-year-and-short-long.component';
import { AnalyticsByYearAndTradeTypeComponent } from './components/analytics-by-year-and-trade-type/analytics-by-year-and-trade-type.component';
import { AnalyticsByYearComponent } from './components/analytics-by-year/analytics-by-year.component';
import { TradeJournalComponent } from './components/trade-journal/trade-journal.component';

const routes: Routes = [
  {path: 'all-analytics', component: AllAnalyticsComponent},
  {path: 'analytics-by-year', component: AnalyticsByYearComponent},
  {path: 'analytics-by-year-and-short-long', component: AnalyticsByYearAndShortLongComponent},
  {path: 'analytics-by-year-and-trade-type', component: AnalyticsByYearAndTradeTypeComponent},
  {path: 'analytics-by-year-and-chart-type', component: AnalyticsByYearAndChartPatternComponent},
  {path: 'trade-data', component: TradeJournalComponent},
  { path: '',   redirectTo: '/all-analytics', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
