import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  selectLoad: string = 'skills';

  constructor() { }

  ngOnInit(): void {
  }

  public onSelect(selected: string): void {
    this.selectLoad = selected;
  }

}
