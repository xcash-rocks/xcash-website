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

  constructor() {

  }

  ngOnInit(): void {
  }

}
