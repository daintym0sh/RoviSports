import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BingModule } from './bing/bing.module';
import { PingModule } from './ping/ping.module';

import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'bing', loadChildren: './bing/bing.module#BingModule' },
  { path: 'ping', loadChildren: './ping/ping.module#PingModule' },
  { path: '',   redirectTo: '/bing', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    BingModule,
    PingModule,
    RouterModule.forRoot(routes, { enableTracing: true } )
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
