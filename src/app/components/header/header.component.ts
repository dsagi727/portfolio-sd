import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faBars = faBars;
  faTimes = faTimes;

  openclose: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


 public openMenu(): void{
  this.openclose = true;
  }

  public closeMenu(): void{
    this.openclose = false;
  }

}
