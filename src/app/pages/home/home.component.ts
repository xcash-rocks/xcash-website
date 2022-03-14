//import { Component, OnInit } from '@angular/core';
import {Component, OnInit, AfterViewInit} from '@angular/core';
import {httpdataservice} from '../../services/http-request.service';


declare var anime: any;

var varian = document.getElementById('anid');

var changer: string;

const showfunc = function(varian){
  for(let i = 0; i < 10; i++ ){
    if (i%2 === 0){
      setTimeout(function(){},3000);
      changer = 'Public'
    }
    if (i%2 === 0){
      setTimeout(function(){},3000);
      changer = 'Private'
      if (i === 10){
        i = 0
      }
    }
  }
}



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements AfterViewInit {

  //show: boolean = true;
  //messageSuccess: boolean;
  //getan1= document.getElementsByClassName("an-1");
  //getan2 = document.getElementsByClassName("an-2")

  //showMessageSuccess(){
    //var that = this;
    //this.messageSuccess = true;
    //setTimeout(function(){
      //that.messageSuccess = false;
    //},3000);
  //}

  //anSelector = [document.getElementsByClassName(JSON.stringify ("an-1")), document.getElementsByClassName("an-2")]


  ngAfterViewInit(): void {
    // Animation code goes here
    const textWrapper:any = document.querySelector('.an-1');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
      .add({
        targets: '.an-1 .letter',
        scale: [4,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 3000,
        delay: (el, i) => 70*i

      })

  }

  BLOCKS_PER_DAY:number = 288; //1440;

  blockchain_algorithm:string;
  block_height:string;
  block_reward:number;
  generated_supply:string;
  circulating_supply:string;
  private_tx_count:number;
  public_tx_count:number;

  changer:string;


  constructor(private httpdataservice: httpdataservice) { }



  ngOnInit() {

    showfunc(varian);

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

          this.public_tx_count = res['public_tx_count'];
          this.private_tx_count = res['private_tx_count'];
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
