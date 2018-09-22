import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerService } from '../player.service';
import { BingComponent } from './bing.component';
import { BingRoutingModule} from './bing-routing.module';

import { BingNewGameComponent } from './bing-new-game/bing-new-game.component';
import { BingStatsComponent } from './bing-stats/bing-stats.component';
import { DragulaService, DragulaModule } from 'ng2-dragula';

import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { GamesSharedModule } from '../shared/games-shared/games-shared.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
};

@NgModule({
  declarations: [
    BingComponent,
    BingNewGameComponent,
    BingStatsComponent
  ],
  imports: [
    CommonModule,
    BingRoutingModule,
    GamesSharedModule,
    DragulaModule
  ],
  providers: [
    DragulaService,
    PlayerService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class BingModule { }
