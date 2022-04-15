//import { Component, OnInit } from '@angular/core';
import {Component, OnInit, AfterViewInit} from '@angular/core';
import {httpdataservice} from '../../services/http-request.service';
import anime from 'animejs/lib/anime.es.js';
import { DatePipe } from '@angular/common';
import { Overlay, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { OverlayComponent } from 'src/app/widgets/overlay/overlay.component';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements AfterViewInit {

  overlayRef: OverlayRef | undefined;

  BLOCKS_PER_DAY:number = 288; //1440;

  blockchain_algorithm:string;
  block_height:string;
  block_reward:number;
  generated_supply:string;
  circulating_supply:string;
  private_tx_count:number;
  public_tx_count:number;



  constructor(private httpdataservice: httpdataservice, public datepipe: DatePipe, private overlay: Overlay) { } //private changeRef: ChangeDetectorRef
  
  open() {
    // We create the overlay
    this.overlayRef = this.overlay.create();
    //Then we create a portal to render a component
    const componentPortal = new ComponentPortal(OverlayComponent);
    // We add a custom CSS class to our overlay
    this.overlayRef.addPanelClass("example-list");
    //We render the portal in the overlay
    this.overlayRef.attach(componentPortal);
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

  currentDateTime =this.datepipe.transform((new Date), 'dd/MM/yyyy h:mm:ss' );
  //this.changeRef.detectChanges();
  



  an2 = anime({
    targets: '.square',
    left: '50%'
  });
   
  an3 = anime({
    targets: '.square',
    backgroundColor: '#f96'
  });
  




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
