import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxLottieViewModule } from 'ngx-lottie-view';
import { MediakitComponent } from './mediakit.component';
import { MediakitRoutingModule } from './mediakit-routing.module';


@NgModule({
  declarations: [
    MediakitComponent
  ],
  imports: [
    CommonModule,
    MediakitRoutingModule,
    NgxLottieViewModule
  ],
  exports: [
    MediakitComponent
  ],
})
export class MediakitModule { }
