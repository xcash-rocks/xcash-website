import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})

export class OverlayComponent implements OnInit {

  isOpen: boolean = false
  count:number = 0

  animateOnce(){
    if(this.isOpen === true){
    this.count++;}
  }

  constructor() { }

  ngOnInit(): void {
  }
}