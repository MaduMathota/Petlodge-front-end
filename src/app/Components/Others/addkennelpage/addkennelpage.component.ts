import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Kennel } from '../../../models/kennel';
import { RegistrationService } from '../../../registration.service';

@Component({
  selector: 'app-addkennelpage',
  templateUrl: './addkennelpage.component.html',
  styleUrls: ['./addkennelpage.component.css']
})
export class AddkennelpageComponent implements OnInit {

  constructor(private service:RegistrationService,private router:Router) { }


  ngOnInit(): void {
  }

  kennel:Kennel = new Kennel

  addkennel(){
    this.service.createKennel(this.kennel).subscribe(
    data => {
      console.log("response received !!!")
      this.router.navigate(['/adminstoragekennel'])
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
