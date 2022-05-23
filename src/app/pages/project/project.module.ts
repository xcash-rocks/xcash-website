import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxLottieViewModule } from 'ngx-lottie-view';

import { ProjectComponent } from './project.component';
import { ProjectRoutingModule } from './project-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    NgxLottieViewModule
  ],
  exports: [
    ProjectComponent
  ],
  declarations: [
    ProjectComponent
  ],
  providers: [
  ],
})
export class ProjectModule { }
