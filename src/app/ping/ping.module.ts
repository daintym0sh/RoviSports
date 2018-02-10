import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { PingComponent } from './ping.component';
import { PingRoutingModule } from './ping-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    PingRoutingModule
  ],
  declarations: [PingComponent]
})
export class PingModule { }
