import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { HomeComponent } from './pages/home/home.component';
// import { ProjectComponent } from './pages/project/project.component';
// import { TeamComponent } from './pages/team/team.component';
// import { GetstartedComponent } from './pages/getstarted/getstarted.component';
// import { WalletComponent } from './pages/wallet/wallet.component';
// import { ContributeComponent } from './pages/contribute/contribute.component';
// import { RessourcesComponent } from './pages/ressources/ressources.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { AppRoutingModule } from './app-routing.module';
import { ScrollToTopComponent } from './widgets/scroll-to-top/scroll-to-top.component';
// import { HomeModule } from './pages/home/home.module';
// import { ProjectModule } from './pages/project/project.module';
// import { TeamModule } from './pages/team/team.module';
// import { GetstartedModule } from './pages/getstarted/getstarted.module';
// import { WalletModule } from './pages/wallet/wallet.module';
// import { ContributeModule } from './pages/contribute/contribute.module';
// import { RessourcesModule } from './pages/ressources/ressources.module';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // ProjectComponent,
    // TeamComponent,
    // GetstartedComponent,
    // WalletComponent,
    // ContributeComponent,
    // RessourcesComponent,
    NotFoundComponent,
    ScrollToTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HomeModule,
    // ProjectModule,
    // TeamModule,
    // GetstartedModule,
    // WalletModule,
    // RessourcesModule,
    // ContributeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
