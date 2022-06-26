import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxLottieViewModule } from 'ngx-lottie-view';
import { ClipboardModule } from 'ngx-clipboard';
import { FormsModule } from '@angular/forms';

import { WalletComponent } from './wallet.component';
import { WalletRoutingModule } from './wallet-routing.module';

@NgModule({
  imports: [
    CommonModule,
    WalletRoutingModule,
    NgxLottieViewModule,
    FormsModule,
    ClipboardModule
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
