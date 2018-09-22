import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PingComponent } from './ping.component';
import { PingRoutingModule } from './ping-routing.module';
import { DragulaService } from 'ng2-dragula';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { PlayerService } from '../player.service';
import { GamesSharedModule } from '../shared/games-shared/games-shared.module';
import { PingNewGameComponent } from './ping-new-game/ping-new-game.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
};

@NgModule({
  imports: [
    CommonModule,
    PingRoutingModule,
    GamesSharedModule,
  ],
  declarations: [
    PingComponent,
    PingNewGameComponent
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
export class PingModule { }
