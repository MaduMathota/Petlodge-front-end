import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../../../models/admin';
import { RegistrationService } from '../../../registration.service';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.css']
})
export class AdminsignupComponent implements OnInit {

  admin = new Admin;
  errormessege = '';

  constructor(private service : RegistrationService,private router: Router) { }

  ngOnInit(): void {
    
  }



  adminSignup(){
    this.service.adminCreate(this.admin).subscribe(
    data => {
      console.log("response received !!!")
      this.router.navigate(['/adminpage'])
  },
    error => {
      console.log("error occured !!!")
      this.errormessege="details not correct.please check again"
    }
    )
  
  }

}
