import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxLottieViewModule } from 'ngx-lottie-view';

import { WalletComponent } from './wallet.component';
import { WalletRoutingModule } from './wallet-routing.module';

@NgModule({
  imports: [
    CommonModule,
    WalletRoutingModule,
    NgxLottieViewModule
  ],
  exports: [
    WalletComponent
  ],
  declarations: [
    WalletComponent
  ],
  providers: [
  ],
})
export class WalletModule { }
