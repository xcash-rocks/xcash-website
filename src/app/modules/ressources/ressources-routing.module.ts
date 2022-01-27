import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RessourcesComponent } from './ressources.component';

const routes: Routes = [
  { path: '', component: RessourcesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RessourcesRoutingModule { }
