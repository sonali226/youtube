import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { TrendvideosComponent } from './trendvideos/trendvideos.component';

const routes: Routes = [
  { path: 'trend',  component: TrendvideosComponent},
  { path: 'search', component: SearchComponent, outlet: "search" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
