import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../../../registration.service';
import { Veterinarian } from '../../../models/veterinarian';

@Component({
  selector: 'app-vetlogin',
  templateUrl: './vetlogin.component.html',
  styleUrls: ['./vetlogin.component.css']
})
export class VetloginComponent implements OnInit {
  errormessege = ''
  veterinarian = new Veterinarian();
  constructor(private service: RegistrationService, private router: Router) { }

  ngOnInit(): void {
  
  }

  vetLogin() {
    
    this.service.loginVet(this.veterinarian).subscribe(
      data => {
        console.log("response received !!!")
        this.veterinarian = data
        localStorage.setItem('isloged',this.veterinarian.id)
        this.router.navigate(['/veterinarianwebpage',this.veterinarian.id])
      },
      error => {
        console.log("error occured !!!")
        this.errormessege = "wrong user Id or password.please check again"
      }
    )

  }
  
}
