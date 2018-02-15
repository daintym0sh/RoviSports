import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerService } from '../player.service';
import { BingComponent } from './bing.component';
import { BingRoutingModule} from './bing-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';

import { BingNewGameComponent } from './bing-new-game/ping-new-game.component';
import { BingStatsComponent } from './bing-stats/bing-stats.component';
import { PlayerCardComponent } from '../player-card/player-card.component';
import { PlayerSelectionComponent } from '../player-selection/player-selection.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DragulaModule } from 'ng2-dragula';
import { MatSelectModule } from '@angular/material/select';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
};

@NgModule({
  declarations: [
    BingComponent,
    BingNewGameComponent,
    BingStatsComponent,
    PlayerCardComponent,
    PlayerSelectionComponent
  ],
  imports: [
    CommonModule,
    BingRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    DragulaModule,
    MatSelectModule,
    PerfectScrollbarModule
  ],
  providers: [
    PlayerService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class BingModule { }
