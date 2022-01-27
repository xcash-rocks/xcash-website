import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components imports
//import { HomeComponent } from './modules/home/home.component';
//import { ProjectComponent } from './modules/project/project.component';
//import { TeamComponent } from './modules/team/team.component';
//import { GetstartedComponent } from './modules/getstarted/getstarted.component';
//import { WalletComponent } from './modules/wallet/wallet.component';
//import { RessourcesComponent } from './modules/ressources/ressources.component';
//import { ContributeComponent } from './modules/contribute/contribute.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module')
      .then(mod => mod.HomeModule)
  },
  {
    path: 'project',
    loadChildren: () => import('./modules/project/project.module')
      .then(mod => mod.ProjectModule)
  },
  {
    path: 'team',
    loadChildren: () => import('./modules/team/team.module')
      .then(mod => mod.TeamModule)
  },
  {
    path: 'get-started',
    loadChildren: () => import('./modules/getstarted/getstarted.module')
      .then(mod => mod.GetstartedModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./modules/wallet/wallet.module')
      .then(mod => mod.WalletModule)
  },
  {
    path: 'ressources',
    loadChildren: () => import('./modules/ressources/ressources.module')
      .then(mod => mod.RessourcesModule)
  },
  {
    path: 'contribute',
    loadChildren: () => import('./modules/contribute/contribute.module')
      .then(mod => mod.ContributeModule)
  },

  // components routes
  //{ path: '', component: HomeComponent, },
  // { path: 'project', component: ProjectComponent },
  // { path: 'team', component: TeamComponent },
  // { path: 'getstarted', component: GetstartedComponent },
  // { path: 'wallet', component: WalletComponent },
  // { path: 'ressources', component: RessourcesComponent },
  // { path: 'contribute', component: ContributeComponent },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
