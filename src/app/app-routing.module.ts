import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components imports
//import { HomeComponent } from './pages/home/home.component';
//import { ProjectComponent } from './pages/project/project.component';
//import { TeamComponent } from './pages/team/team.component';
//import { GetstartedComponent } from './pages/getstarted/getstarted.component';
//import { WalletComponent } from './pages/wallet/wallet.component';
//import { RessourcesComponent } from './pages/ressources/ressources.component';
//import { ContributeComponent } from './pages/contribute/contribute.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module')
      .then(mod => mod.HomeModule)
  },
  {
    path: 'project',
    loadChildren: () => import('./pages/project/project.module')
      .then(mod => mod.ProjectModule)
  },
  {
    path: 'team',
    loadChildren: () => import('./pages/team/team.module')
      .then(mod => mod.TeamModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module')
      .then(mod => mod.NewsModule)
  },
  {
    path: 'get-started',
    loadChildren: () => import('./pages/getstarted/getstarted.module')
      .then(mod => mod.GetstartedModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./pages/wallet/wallet.module')
      .then(mod => mod.WalletModule)
  },
  {
    path: 'ressources',
    loadChildren: () => import('./pages/ressources/ressources.module')
      .then(mod => mod.RessourcesModule)
  },
  {
    path: 'contribute',
    loadChildren: () => import('./pages/contribute/contribute.module')
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
