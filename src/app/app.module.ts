import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxLottieViewModule } from 'ngx-lottie-view';


import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { ScrollToTopComponent } from './widgets/scroll-to-top/scroll-to-top.component';

import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

import {HttpClientModule} from '@angular/common/http';
import {httpdataservice} from '../app/services/http-request.service';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ScrollToTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxLottieViewModule,
    NgxPageScrollModule,
    NgxPageScrollCoreModule,
    HttpClientModule
  ],
  providers: [
    httpdataservice
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
