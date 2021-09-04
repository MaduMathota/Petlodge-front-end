import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../../../models/admin';
import { RegistrationService } from '../../../registration.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  admin = new Admin();
  errormessege = '';
  constructor(private service : RegistrationService,private router: Router) { }

  ngOnInit(): void {

    
  }

  adminLogin(){

        this.service.adminLogin(this.admin).subscribe(
          data => {
            console.log("response received !!!")
            localStorage.setItem('isloged',this.admin.adminId)
            localStorage.setItem('adloged',this.admin.adminId)
            this.router.navigate(['/adminpage'])
        },

          error => {
            console.log("error occured !!!")
            this.errormessege="wrong user Id or password.please check again"
          }
          )

  }


}
