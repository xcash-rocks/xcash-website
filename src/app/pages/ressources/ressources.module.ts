import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RessourcesComponent } from './ressources.component';
import { RessourcesRoutingModule } from './ressources-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RessourcesRoutingModule
  ],
  exports: [
    RessourcesComponent
  ],
  declarations: [
    RessourcesComponent
  ],
  providers: [
  ],
})
export class RessourcesModule { }
