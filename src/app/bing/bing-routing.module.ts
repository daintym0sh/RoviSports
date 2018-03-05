import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BingStatsComponent } from './bing-stats/bing-stats.component';
import { BingComponent } from './bing.component';
import { BingNewGameComponent } from './bing-new-game/bing-new-game.component';

const routes = [
  {
    path: '',
    component: BingComponent,
    children: [
      { path: 'new', component: BingNewGameComponent},
      { path: 'stats', component: BingStatsComponent}
    ]
  }
];

  @NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })
  export class BingRoutingModule {}
