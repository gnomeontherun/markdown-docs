import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertsComponent } from './docs/alerts';
import { BadgesComponent } from './docs/badges';

const routes: Routes = [
  { path: 'documentation/alerts', component: AlertsComponent },
  { path: 'documentation/badges', component: BadgesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
