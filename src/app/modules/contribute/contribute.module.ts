import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContributeComponent } from './contribute.component';
import { ContributeRoutingModule } from './contribute-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ContributeRoutingModule
  ],
  exports: [
    ContributeComponent
  ],
  declarations: [
    ContributeComponent
  ],
  providers: [
  ],
})
export class ContributeModule { }
