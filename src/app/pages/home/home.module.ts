import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxLottieViewModule } from 'ngx-lottie-view';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

import { DiscoverComponent } from 'src/app/sections/discover/discover.component';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxLottieViewModule,
  ],
  exports: [
    HomeComponent
  ],
  declarations: [
    HomeComponent,
    DiscoverComponent
  ],
  providers: [
  ],
})
export class HomeModule { }
