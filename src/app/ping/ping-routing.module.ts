import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PingComponent } from './ping.component';
import { PingNewGameComponent } from './ping-new-game/ping-new-game.component';

const routes: Routes = [
  { path: '', redirectTo: 'ping/new', pathMatch: 'full' },
  { path: 'ping', redirectTo: 'ping/new', pathMatch: 'full' },
  {
    path: 'ping',
    component: PingComponent,
    children: [
      { path: 'new', component: PingNewGameComponent }
    ]
  }
  ];

  @NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })
  export class PingRoutingModule {}
