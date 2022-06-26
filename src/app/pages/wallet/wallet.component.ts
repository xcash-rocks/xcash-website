import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { NgModule } from '@angular/core';

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
  text1: string;
  text2: string;
  textModal: string;
  isCopied1: boolean;
  isCopied2: boolean;
  isCopied3: boolean;
  basic = false;

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

  constructor(private _clipboardService: ClipboardService) {}

  ngOnInit(): void {
    // Handle copy response globally https://github.com/maxisam/ngx-clipboard#handle-copy-response-globally
    this._clipboardService.copyResponse$.subscribe(re => {
        if (re.isSuccess) {
            alert('Copy success!');
        }
    });
  }

  onCopyFailure() {
      alert('copy fail!');
  }

}
