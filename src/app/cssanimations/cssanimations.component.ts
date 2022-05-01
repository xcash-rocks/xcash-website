import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cssanimations',
  templateUrl: './cssanimations.component.html',
  styleUrls: ['./cssanimations.component.css']
})
export class CssanimationsComponent implements OnInit {

isOpen:boolean= true

flagOn:boolean= true

checkflagOn(){
  console.log('this is flagOn: ',this.flagOn)
}

  constructor() { }

  ngOnInit(): void {
  }

}
