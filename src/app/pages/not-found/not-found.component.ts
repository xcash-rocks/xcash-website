import { Component, OnInit } from '@angular/core';
import { Overlay, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { DiscoverComponent } from 'src/app/sections/discover/discover.component';


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  overlayRef: OverlayRef | undefined;

  public show:boolean = false;
  public buttonName:any = 'Discover X-Cash';

  constructor( private overlay: Overlay) { }

  open() {
    this.overlayRef = this.overlay.create();
    const componentPortal = new ComponentPortal(DiscoverComponent);
    this.overlayRef.addPanelClass("example-list");
    this.overlayRef.attach(componentPortal);
}


toggle() {
  this.show = !this.show;
  if(this.show)
  this.buttonName = "Keep Discovering because CDK overlay doesn't have a close method";
else
  this.buttonName = "Discover X-Cash";
  this.open()
}

  ngOnInit(): void {
  }

}
