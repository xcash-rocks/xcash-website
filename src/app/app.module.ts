import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxLottieViewModule } from 'ngx-lottie-view';


import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { ScrollToTopComponent } from './widgets/scroll-to-top/scroll-to-top.component';





@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ScrollToTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxLottieViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
