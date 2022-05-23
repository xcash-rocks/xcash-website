import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { MediakitComponent } from './mediakit.component';


const routes: Routes = [
    { path: '', component: MediakitComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediakitRoutingModule { }
