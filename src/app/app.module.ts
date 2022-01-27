import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { HomeComponent } from './modules/home/home.component';
// import { ProjectComponent } from './modules/project/project.component';
// import { TeamComponent } from './modules/team/team.component';
// import { GetstartedComponent } from './modules/getstarted/getstarted.component';
// import { WalletComponent } from './modules/wallet/wallet.component';
// import { ContributeComponent } from './modules/contribute/contribute.component';
// import { RessourcesComponent } from './modules/ressources/ressources.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';

import { AppRoutingModule } from './app-routing.module';
// import { HomeModule } from './modules/home/home.module';
// import { ProjectModule } from './modules/project/project.module';
// import { TeamModule } from './modules/team/team.module';
// import { GetstartedModule } from './modules/getstarted/getstarted.module';
// import { WalletModule } from './modules/wallet/wallet.module';
// import { ContributeModule } from './modules/contribute/contribute.module';
// import { RessourcesModule } from './modules/ressources/ressources.module';

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
    NotFoundComponent
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
