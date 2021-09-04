import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from 'src/app/models/food';
import Swal from 'sweetalert2';
import { RegistrationService } from '../../../registration.service';

@Component({
  selector: 'app-addfoodpage',
  templateUrl: './addfoodpage.component.html',
  styleUrls: ['./addfoodpage.component.css']
})
export class AddfoodpageComponent implements OnInit {

  food:Food = new Food
  constructor(private service:RegistrationService,private router:Router) { }

  ngOnInit(): void {
  }

  addfood(){
    this.service.createFood(this.food).subscribe(
    data => {
      console.log("response received !!!")
      this.router.navigate(['/adminstoragefood'])
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
