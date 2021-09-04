import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {NgForm} from '@angular/forms';
import { RegistrationService } from '../../../registration.service';
import { Caretaker } from 'src/app/models/caretaker';
import { Router } from '@angular/router';
import { AuthenticationGuard } from '../../../authentication.guard';


@Component({
  selector: 'app-caretakerlogin',
  templateUrl: './caretakerlogin.component.html',
  styleUrls: ['./caretakerlogin.component.css']
})
export class CaretakerloginComponent implements OnInit {

  caretaker = new Caretaker();
  errormessege = '';
  careactive:boolean = false;
  constructor(private service : RegistrationService,private router: Router, private canactive: AuthenticationGuard) { }

  ngOnInit(): void {
  }

  caretakerLogin(){
    this.service.caretakerFromBackEnd(this.caretaker).subscribe(
    data => {
      console.log("response received !!!")
      this.caretaker = data
      localStorage.setItem('isloged',this.caretaker.caretakerId)
      this.router.navigate(['/caretakerloginsuccess',this.caretaker.caretakerId])
  },
    error => {
      console.log("error occured !!!")
      this.errormessege="wrong user Id or password.please check again"
    }
    )
  
  }

  caretakersignuppage(){
    this.router.navigate(['/caretakersignup'])
  }

}
