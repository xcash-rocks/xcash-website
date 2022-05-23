import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  divTab = '';
  divTab2 = 'Minted';

  divToggle(index){
    if(index == this.divTab) {
      this.divTab = '';
    }else{
      this.divTab =index;
    }
  }
  divToggle2 (index){
    if(index == this.divTab2) {
      this.divTab2 = '';
    }else{
      this.divTab2 =index;
    }
  }

  constructor() { }

  ngOnInit(): void { }

}
