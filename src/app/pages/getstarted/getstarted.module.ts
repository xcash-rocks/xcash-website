import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetstartedComponent } from './getstarted.component';
import { GetstartedRoutingModule } from './getstarted-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GetstartedRoutingModule
  ],
  exports: [
    GetstartedComponent
  ],
  declarations: [
    GetstartedComponent
  ],
  providers: [
  ],
})
export class GetstartedModule { }
