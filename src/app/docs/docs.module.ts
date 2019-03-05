
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';

import { AlertsComponent } from './alerts';
import { BadgesComponent } from './badges';

const routes: Routes = [
  { path: 'alerts', component: AlertsComponent },
  { path: 'badges', component: BadgesComponent },
];

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AlertsComponent,
    BadgesComponent,
  ],
  exports: [RouterModule]
})
export class DocsModule { }
