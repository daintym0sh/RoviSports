import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerCardComponent } from '../player-card/player-card.component';
import { PlayerSelectionComponent } from '../player-selection/player-selection.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DragulaModule } from 'ng2-dragula';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSelectModule,
    PerfectScrollbarModule,
    MatFormFieldModule,
    DragulaModule // Not exported
  ],
  declarations: [
    PlayerCardComponent,
    PlayerSelectionComponent
  ],
  exports: [
    PlayerCardComponent,
    PlayerSelectionComponent,
    MatTabsModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSelectModule,
    PerfectScrollbarModule,
    MatFormFieldModule
  ]
})
export class GamesSharedModule {

}
