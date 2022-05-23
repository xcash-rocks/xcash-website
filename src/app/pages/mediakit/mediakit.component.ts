import { Component, OnInit } from '@angular/core';
import {httpdataservice} from '../../services/http-request.service';

@Component({
  selector: 'app-mediakit',
  templateUrl: './mediakit.component.html',
  styleUrls: ['./mediakit.component.css']
})
export class MediakitComponent implements OnInit {

  blockchain_algorithm:string;
  block_height:string;
  block_reward:number;
  generated_supply:string;
  circulating_supply:string;
  private_tx_count:number;
  public_tx_count:number;

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

        }
        else
        {
          this.blockchain_algorithm = "DPOPS/CryptoNote";
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
