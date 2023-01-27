import { Component, OnInit } from '@angular/core';
import { faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  faLink = faExternalLinkAlt;
  faCode = faCode;

  constructor() { }

  ngOnInit(): void {
  }

}
