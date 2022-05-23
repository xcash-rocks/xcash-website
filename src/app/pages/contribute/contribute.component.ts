import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit {

  divTab = '';
  divToggle(index){
    if(index == this.divTab) {
      this.divTab = '';
    }else{
      this.divTab =index;
    }
  }

  constructor() { }

  ngOnInit(): void { }

}
