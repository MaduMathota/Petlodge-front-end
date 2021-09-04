import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AppointmentPet } from 'src/app/models/appointment-pet';
import Swal from 'sweetalert2';

import { RegistrationService } from '../../../registration.service';

@Component({
  selector: 'app-appoinmentpetdetails',
  templateUrl: './appoinmentpetdetails.component.html',
  styleUrls: ['./appoinmentpetdetails.component.css']
})
export class AppoinmentpetdetailsComponent implements OnInit {

  constructor(private sesrvice:RegistrationService, private router:Router, private route:ActivatedRoute) { }

  str:String
  pet:AppointmentPet

  ngOnInit(): void {
    this.route.paramMap.subscribe((par: ParamMap)=>{
      this.str = par.get('id')
    this.getappointpetdetails(this.str);

    
    }
    )
  }

  getappointpetdetails(id:String){
    this.sesrvice.getAppointmentPetById(id).subscribe(
      data=>{
        this.pet=data
      },
      error=>{
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
        this.router.navigate(['/vetlogin']);

      } 
    })

  }

}
