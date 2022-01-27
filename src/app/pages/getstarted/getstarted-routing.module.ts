import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetstartedComponent } from './getstarted.component';

const routes: Routes = [
  { path: '', component: GetstartedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetstartedRoutingModule { }
