import { Component, OnInit } from '@angular/core';
// import { Inject, PLATFORM_ID } from '@angular/core';
// import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  divTab = '';

  // constructor(
  //   @Inject(PLATFORM_ID) private platformId: object) {
  // }
  //
  // ngOnInit(): void {
  //   if (isPlatformBrowser(this.platformId)) {
  //     let navMain = document.getElementById('navbarCollapse');
  //     if (navMain) {
  //       navMain.onclick = function () {
  //         if (navMain) {
  //           navMain.classList.remove("show");
  //         }
  //       }
  //     }
  //   }
  // }


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
