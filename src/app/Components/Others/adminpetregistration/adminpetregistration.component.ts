import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from 'src/app/models/pet';
import Swal from 'sweetalert2';

import { Petowner } from '../../../models/petowner';
import { RegistrationService } from '../../../registration.service';

@Component({
  selector: 'app-adminpetregistration',
  templateUrl: './adminpetregistration.component.html',
  styleUrls: ['./adminpetregistration.component.css']
})
export class AdminpetregistrationComponent implements OnInit {

  pet = new Pet;
  petowner = new Petowner;
  petownermode:boolean = true;
  petmode:boolean = false;
  constructor(private service: RegistrationService,private router: Router) { }


  ngOnInit(): void {
  }



  petRegister(){
    this.service.petCreate(this.pet).subscribe(
      data => {
        console.log("response received !!!")
        Swal.fire({
          icon:'success',
          title: 'Pet registered!',
          showConfirmButton: false,
          timer: 1500
        })
        
    },
      error => {
        console.log("error occured !!!")
      }
      )
    
    
    }

    petownerRegister(){
      this.service.petownerCreate(this.petowner).subscribe(
        data => {
          console.log("response received !!!")
          Swal.fire({
            icon:'success',
            title: 'Petowner registered!',
            showConfirmButton: false,
            timer: 1500
          })
      },
        error => {
          console.log("error occured !!!")
        }
        )
      
      }

      logout(){

        Swal.fire({
          title: 'do you want to logout?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Yes!',
          cancelButtonText: 'No!',
    
        }).then((result) => {
          if (result.value) {
            localStorage.removeItem('isloged');
            localStorage.removeItem('adloged');
            this.router.navigate(['/adminlogin']);
          } 
        })
    
      }
      next(){
        this.petownermode = false;
        this.petmode = true;
      }

      back(){
        this.petownermode = true;
        this.petmode = false;
      }

}
