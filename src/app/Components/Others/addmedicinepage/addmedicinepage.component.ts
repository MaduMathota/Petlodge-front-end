import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Medicine } from '../../../models/medicine';
import { RegistrationService } from '../../../registration.service';

@Component({
  selector: 'app-addmedicinepage',
  templateUrl: './addmedicinepage.component.html',
  styleUrls: ['./addmedicinepage.component.css']
})
export class AddmedicinepageComponent implements OnInit {

  constructor(private service:RegistrationService,private router:Router) { }

  medicine:Medicine = new Medicine

  ngOnInit(): void {
  }



  addmedicine(){
    this.service.createMedicine(this.medicine).subscribe(
    data => {
      console.log("response received !!!")
      this.router.navigate(['/adminstoragemedicine'])
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

}
