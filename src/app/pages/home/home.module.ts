import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxLottieViewModule } from 'ngx-lottie-view';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';


import { LandingComponent } from 'src/app/sections/landing/landing.component';
import { LandingArtComponent } from 'src/app/sections/landing-art/landing-art.component';
import { FeatureListComponent } from 'src/app/sections/feature-list/feature-list.component';
import { MetricsComponent } from 'src/app/sections/metrics/metrics.component';
import { KeyFeaturesComponent } from 'src/app/sections/key-features/key-features.component';
import { HybridTxComponent } from 'src/app/sections/hybrid-tx/hybrid-tx.component';
import { DPOPSComponent } from '../../sections/dpops/dpops.component';
import { SidechainsComponent } from 'src/app/sections/sidechains/sidechains.component';
import { EcoxComponent } from 'src/app/sections/ecox/ecox.component';
import { StakeComponent } from 'src/app/sections/stake/stake.component';
import { XbankComponent } from 'src/app/sections/xbank/xbank.component';
import { WxcashComponent } from 'src/app/sections/wxcash/wxcash.component';
import { XpaymentComponent } from 'src/app/sections/xpayment/xpayment.component';
import { XpyComponent } from '../../sections/xpy/xpy.component';
import { XdexComponent } from 'src/app/sections/xdex/xdex.component';
import { FoundationComponent } from 'src/app/sections/foundation/foundation.component';
import { PartnersComponent } from 'src/app/sections/partners/partners.component';
import { GetStartedComponent } from 'src/app/sections/get-started/get-started.component';
import { UsexcashComponent } from 'src/app/sections/usexcash/usexcash.component';
import { NamespaceComponent } from 'src/app/sections/namespace/namespace.component';
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
    DiscoverComponent,
    LandingComponent,
    LandingArtComponent,
    FeatureListComponent,
    MetricsComponent,
    KeyFeaturesComponent,
    HybridTxComponent,
    DPOPSComponent,
    SidechainsComponent,
    EcoxComponent,
    StakeComponent,
    XbankComponent,
    WxcashComponent,
    XpaymentComponent,
    XpyComponent,
    XdexComponent,
    FoundationComponent,
    PartnersComponent,
    GetStartedComponent,
    UsexcashComponent,
    NamespaceComponent
  ],
  providers: [
  ],
})
export class HomeModule { }
