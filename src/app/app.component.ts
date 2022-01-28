import { Component, OnInit } from '@angular/core';

declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'X-Cash | Private Cryptocurrency for the Web3.0';
  version = 'X-Cash is the Web3’s private computing Platform.';

  ngOnInit(){
     //  $('button').click(function(){
     //    alert('Wass up!'');
     // });
   }
}

//
//
// export class AppComponent {
//   title = 'X-Cash | Private Cryptocurrency for the Web3.0';
//   version = 'X-Cash is the Web3’s private computing Platform.';
// }
