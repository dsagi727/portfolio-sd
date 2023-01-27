import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faLinkedin, faGithub  } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

import { faPhoneSquare, faCopyright } from '@fortawesome/free-solid-svg-icons';





@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faPaperPlane = faPaperPlane;
  faPhoneSquare = faPhoneSquare;

  faCopyright = faCopyright;
  actYear = new Date();

  contactForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      msg: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(255)]),
    })
  }

  public sendLetter(): void {
    const newLetter = this.contactForm.value;
    if(newLetter){

}
    }
  }
