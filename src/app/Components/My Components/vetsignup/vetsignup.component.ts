import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../../../registration.service';
import { Veterinarian } from '../../../models/veterinarian';

@Component({
  selector: 'app-vetsignup',
  templateUrl: './vetsignup.component.html',
  styleUrls: ['./vetsignup.component.css']
})
export class VetsignupComponent implements OnInit {

 veterinarian = new Veterinarian;
  constructor(private service: RegistrationService,private router: Router) { }

  ngOnInit(): void {
  }

  veterinarianSignup(){
    this.service.createVet(this.veterinarian).subscribe(
      data => {
        console.log("response received !!!")
        this.router.navigate(['/vetpage',this.veterinarian.id])
    },
      error => {
        console.log("error occured !!!")
      }
      )
    
    }
  }
