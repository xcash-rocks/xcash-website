import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit {

  subSectionName:string;
  divTab = '';

  divToggle(index){
    if(index == this.divTab) {
      this.divTab = '';
    }else{
      this.divTab =index;
    }
    console.log('divTab',this.divTab);
    console.log('index',index);
  }

  constructor() { }

  ngOnInit(): void { }

}
