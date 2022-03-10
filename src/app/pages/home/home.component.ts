//import { Component, OnInit } from '@angular/core';
import {Component, OnInit, AfterViewInit} from '@angular/core';
import {httpdataservice} from '../../services/http-request.service';
declare var anime: any;
const word:any = 'Public'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {



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
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.an-1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
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

  // current_estimated_blockchain_size:string;
  // current_blockchain_difficulty:string;

  // current_blockchain_hashrate:string;
  // total_tx:string;
  // total_tx_pool:string;
  // network_hashrate_chart_title:string = "Network Hashrate Chart";
  // miningpoolchartdata:any [];
  // difficultychartdata:any [];


  //htmlcode:boolean = false;
  // htmlcodechart:boolean = false;

  constructor(private httpdataservice: httpdataservice) { }

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

          // this.current_blockchain_difficulty = "Error";
          // this.current_blockchain_hashrate = "Error";
          // this.total_tx = "Error";
          // this.total_tx_pool = "Error";
          // this.current_estimated_blockchain_size = "Error";

        }
        else
        {
          this.blockchain_algorithm = "DPOPS/CryptoNote"; //+ res["blockchain_algorithm"];
          this.block_height = res['block_height'];

          this.generated_supply = res['generated_supply'];
          this.circulating_supply = res['circulating_supply'];

          this.public_tx_count = res['public_tx_count'];
          this.private_tx_count = res['private_tx_count'];

          // this.current_blockchain_difficulty = res['current_blockchain_difficulty'];
          // this.current_blockchain_hashrate = res['current_blockchain_hashrate'];
          // this.total_tx = res['total_tx'];
          // this.total_tx_pool = res['total_tx_pool'];
          // this.current_estimated_blockchain_size = res['current_estimated_blockchain_size'] != 0 ? res['current_estimated_blockchain_size'] : "Error";

        }
        //this.htmlcode = true;
      },
      (error) =>
      {
        this.blockchain_algorithm = "Error";
        this.block_height = "Error";

        this.generated_supply = "Error";
        this.circulating_supply = "Error";

        this.public_tx_count = 0;
        this.private_tx_count = 0;

        // this.current_blockchain_difficulty = "Error";
        // this.current_blockchain_hashrate = "Error";
        // this.total_tx = "Error";
        // this.total_tx_pool = "Error";
        // this.current_estimated_blockchain_size = "Error";

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
