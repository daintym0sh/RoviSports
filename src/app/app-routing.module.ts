import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BingModule } from './bing/bing.module';
import { PingModule } from './ping/ping.module';

import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'bing', loadChildren: 'app/bing/bing.module#BingModule'},
  { path: 'ping', loadChildren: 'app/ping/ping.module#PingModule' },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    BingModule,
    PingModule,
    RouterModule.forRoot(routes),
    DragulaModule,
    MatCardModule,
    FlexLayoutModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}