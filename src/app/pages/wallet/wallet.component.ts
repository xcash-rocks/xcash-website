import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

  // toggle : boolean = true;
  // onClickToggle(){
  //   this.toggle = !this.toggle;
  // }


  divTab = 'winWallet';
  divToggle(index){
    if(index == this.divTab) {
      this.divTab = '';
    }else{
      this.divTab =index;
    }
    console.log("index", index);
    console.log("divTab", this.divTab);
  }

  divTab2 = 'Android';
  divToggle2 (index){
    if(index == this.divTab2) {
      this.divTab2 = '';
    }else{
      this.divTab2 =index;
    }
  }

  constructor() {}

  ngOnInit(): void {}

}
