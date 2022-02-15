//import { Component, OnInit } from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {httpdataservice} from '../../services/http-request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  BLOCKS_PER_DAY:number = 288; //1440;

  generated_supply:string;
  circulating_supply:string;
  block_height:string;
  current_blockchain_difficulty:string;
  blockchain_algorithm:string;
  current_blockchain_hashrate:string;
  total_tx:string;
  total_tx_pool:string;
  current_estimated_blockchain_size:string;
  blockchain_current_version:string;
  blockchain_current_version_block_height:string;
  blockchain_current_version_date:string;
  blockchain_next_version:string;
  blockchain_next_version_block_height:string;
  blockchain_next_version_estimated_date:string;
  block_reward:number;
  network_hashrate_chart_title:string = "Network Hashrate Chart";
  miningpoolchartdata:any [];
  difficultychartdata:any [];
  public_tx_count:number;
  private_tx_count:number;
  htmlcode:boolean = false;
  // htmlcodechart:boolean = false;

  constructor(private httpdataservice: httpdataservice) { }

  ngOnInit() {

    clearInterval(this.httpdataservice.Timer);
    this.httpdataservice.get_request(this.httpdataservice.SERVER_HOSTNAME_AND_PORT_GET_BLOCKCHAIN_DATA).subscribe(
      (res) =>
      {
        if (JSON.stringify(res).indexOf("Error") !== -1)
        {
          this.generated_supply = "Error";
          this.circulating_supply = "Error";
          this.block_height = "Error";
          this.blockchain_algorithm = "Error";
          this.current_blockchain_difficulty = "Error";
          this.current_blockchain_hashrate = "Error";
          this.total_tx = "Error";
          this.total_tx_pool = "Error";
          this.current_estimated_blockchain_size = "Error";
          this.blockchain_current_version = "Error";
          this.blockchain_current_version_block_height = "Error";
          this.blockchain_current_version_date = "Error";
          this.blockchain_next_version = "Error";
          this.blockchain_next_version_block_height = "Error";
          this.blockchain_next_version_estimated_date = "Error";
          this.public_tx_count = 0;
          this.private_tx_count = 0;
        }
        else
        {
          this.generated_supply = res['generated_supply'];
          this.circulating_supply = res['circulating_supply'];
          this.block_height = res['block_height'];
          this.current_blockchain_difficulty = res['current_blockchain_difficulty'];
          this.blockchain_algorithm = "DPOPS/CryptoNote"; //+ res["blockchain_algorithm"];
          this.current_blockchain_hashrate = res['current_blockchain_hashrate'];
          this.total_tx = res['total_tx'];
          this.total_tx_pool = res['total_tx_pool'];
          this.current_estimated_blockchain_size = res['current_estimated_blockchain_size'] != 0 ? res['current_estimated_blockchain_size'] : "Error";
          this.blockchain_current_version = res['blockchain_current_version'];
          this.blockchain_current_version_block_height = res['blockchain_current_version_block_height'];
          this.blockchain_current_version_date = res['blockchain_current_version_date'];
          this.blockchain_next_version = res['blockchain_next_version'];
          this.blockchain_next_version_block_height = res['blockchain_next_version_block_height'];
          this.blockchain_next_version_estimated_date = res['blockchain_next_version_estimated_date'];
          this.public_tx_count = res['public_tx_count'];
          this.private_tx_count = res['private_tx_count'];
        }
        this.htmlcode = true;
      },
      (error) =>
      {
        this.generated_supply = "Error";
        this.circulating_supply = "Error";
        this.block_height = "Error";
        this.current_blockchain_difficulty = "Error";
        this.blockchain_algorithm = "Error";
        this.current_blockchain_hashrate = "Error";
        this.total_tx = "Error";
        this.total_tx_pool = "Error";
        this.current_estimated_blockchain_size = "Error";
        this.blockchain_current_version = "Error";
        this.blockchain_current_version_block_height = "Error";
        this.blockchain_current_version_date = "Error";
        this.blockchain_next_version = "Error";
        this.blockchain_next_version_block_height = "Error";
        this.blockchain_next_version_estimated_date = "Error";
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
