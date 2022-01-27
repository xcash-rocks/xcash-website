import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamComponent } from './team.component';
import { TeamRoutingModule } from './team-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TeamRoutingModule
  ],
  exports: [
    TeamComponent
  ],
  declarations: [
    TeamComponent
  ],
  providers: [
  ],
})
export class TeamModule { }
