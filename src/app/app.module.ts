import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxLottieViewModule } from 'ngx-lottie-view';


import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { ScrollToTopComponent } from './widgets/scroll-to-top/scroll-to-top.component';

import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

import { HttpClientModule } from '@angular/common/http';
import { httpdataservice } from '../app/services/http-request.service';
import { OverlayComponent } from './widgets/overlay/overlay.component';
import { OverlayModule } from "@angular/cdk/overlay";
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CssanimationsComponent } from './cssanimations/cssanimations.component';

import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ScrollToTopComponent,
    OverlayComponent,
    CssanimationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxLottieViewModule,
    NgxPageScrollModule,
    NgxPageScrollCoreModule,
    HttpClientModule,
    OverlayModule,
    DragDropModule,
    ClipboardModule

  ],
  providers: [
    httpdataservice,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
