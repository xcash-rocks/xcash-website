import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})



export class OverlayComponent implements OnInit {


  isOpen = false

  constructor() { }

  ngOnInit(): void {
  }

  dragPosition: any = {x: 0, y: 0};

  changePosition() {
    this.dragPosition = {x: this.dragPosition.x + 50, y: this.dragPosition.y + 50};
  }
}


