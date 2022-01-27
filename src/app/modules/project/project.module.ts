import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectComponent } from './project.component';
import { ProjectRoutingModule } from './project-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule
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
