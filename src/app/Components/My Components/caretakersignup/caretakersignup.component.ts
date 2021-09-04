import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { Caretaker } from 'src/app/models/caretaker';

import { RegistrationService } from '../../../registration.service';

@Component({
  selector: 'app-caretakersignup',
  templateUrl: './caretakersignup.component.html',
  styleUrls: ['./caretakersignup.component.css']
})
export class CaretakersignupComponent implements OnInit {

  caretaker = new Caretaker;
  constructor(private service: RegistrationService,private router: Router) { 

  }

  ngOnInit(): void {
  }

  caretakerSignup(){
    this.service.caretakerSendtoBackEnd(this.caretaker).subscribe(
      data => {
        console.log("response received !!!")
        this.router.navigate(['/caretakerlogin'])
    },
      error => {
        console.log("error occured !!!")
      }
      )
    
    }
  }
