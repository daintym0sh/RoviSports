import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BingModule } from './bing/bing.module';
import { PingModule } from './ping/ping.module';

import { DragulaModule } from 'ng2-dragula';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'bing', loadChildren: () => BingModule },
  { path: 'ping', loadChildren: () => PingModule },
  { path: '',   redirectTo: '/bing', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    BingModule,
    PingModule,
    RouterModule.forRoot(routes),
    DragulaModule.forRoot(),
    MatCardModule,
    FlexLayoutModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
