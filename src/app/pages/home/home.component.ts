//import { Component, OnInit } from '@angular/core';
import {Component, AfterViewInit} from '@angular/core';
import {httpdataservice} from '../../services/http-request.service';
import anime from 'animejs/lib/anime.es.js';
import { Overlay, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { OverlayComponent } from 'src/app/widgets/overlay/overlay.component';
import { CssanimationsComponent } from '../../cssanimations/cssanimations.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements AfterViewInit {

  overlayRef: OverlayRef | Overlay;

  overlayRef2: OverlayRef | Overlay;

  BLOCKS_PER_DAY:number = 288; //1440;

  blockchain_algorithm:string;
  block_height:string;
  block_reward:number;
  generated_supply:string;
  circulating_supply:string;
  private_tx_count:number;
  public_tx_count:number;



  constructor(private httpdataservice: httpdataservice, private overlay: Overlay, ) { } //private changeRef: ChangeDetectorRef

  flag : boolean = true;

  initalizeMethod(){
    if(this.flag){
      this.noMoreOverlayIterations()
    }
  }

  noMoreOverlayIterations(){
    this.open();
    this.flag = false;
  }

  open() {
    this.overlayRef = this.overlay.create();
    const componentPortal = new ComponentPortal(OverlayComponent);
    this.overlayRef.addPanelClass("example-list");
    this.overlayRef.attach(componentPortal);
}

flag2 : boolean = true;

initalizeMethod2(){
  if(this.flag2){
    this.noMoreOverlayIterations2()
  }
}

noMoreOverlayIterations2(){
  this.openanimation();
  this.flag2 = false;
}


openanimation() {
  this.overlayRef2 = this.overlay.create();
  const componentPortal = new ComponentPortal(CssanimationsComponent);
  this.overlayRef2.attach(componentPortal);
}


  ngAfterViewInit(): void {

     anime({
          targets: '.slidingHorizontal span ',
        keyframes: [
          {translateX: -50, opacity: 0, duration:0},
          {translateX: 0, opacity:1, duration:500},
          {translateX: 50, opacity:0,delay: 2000, duration:500},
        ],
        easing: 'linear',
        delay: anime.stagger(2500, {start: 0}),
        loop: true,

      });
  }
  rocket_flag:boolean = true

  ngOnInit() {

    clearInterval(this.httpdataservice.Timer);
    this.httpdataservice.get_request(this.httpdataservice.SERVER_HOSTNAME_AND_PORT_GET_BLOCKCHAIN_DATA).subscribe(
      (res) =>
      {
        if (JSON.stringify(res).indexOf("Error") !== -1)
        {
          this.blockchain_algorithm = "Error";
          this.block_height = "Error";

          this.generated_supply = "Error";
          this.circulating_supply = "Error";

          this.public_tx_count = 0;
          this.private_tx_count = 0;
        }
        else
        {
          this.blockchain_algorithm = "DPOPS/CryptoNote"; //+ res["blockchain_algorithm"];
          this.block_height = res['block_height'];

          this.generated_supply = res['generated_supply'];
          this.circulating_supply = res['circulating_supply'];
          //this.changeRef.detectChanges();

          this.public_tx_count = res['public_tx_count'];
          //this.changeRef.detectChanges();
          this.private_tx_count = res['private_tx_count'];
          //this.changeRef.detectChanges();
        }
      },
      (error) =>
      {
        this.blockchain_algorithm = "Error";
        this.block_height = "Error";

        this.generated_supply = "Error";
        this.circulating_supply = "Error";

        this.public_tx_count = 0;
        this.private_tx_count = 0;
      }
    );


    this.httpdataservice.get_request(this.httpdataservice.SERVER_HOSTNAME_AND_PORT_GET_LAST_BLOCK_DATA).subscribe(
      (res) =>
      {
        if (JSON.stringify(res).indexOf("Error") !== -1)
        {
          this.block_reward = 0;
        }
        else
        {
          this.block_reward = Math.round(res['block_reward']);
        }
      },
      (error) =>
      {
        this.block_reward = 0;
      }
    );

  }

}
function id(id: any) {
  throw new Error('Function not implemented.');
}

