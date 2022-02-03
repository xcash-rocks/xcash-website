import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { TeamComponent } from './team.component';
import { TeamRoutingModule } from './team-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TeamRoutingModule,
    NgxPageScrollModule
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
