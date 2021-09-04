import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pettype } from 'src/app/models/pettype';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-adminpettypes',
  templateUrl: './adminpettypes.component.html',
  styleUrls: ['./adminpettypes.component.css']
})
export class AdminpettypesComponent implements OnInit {

  types : Array<Pettype> = new Array<Pettype> ();
  str:String;
  size=12;
  constructor(private service: RegistrationService,private router: Router) { }

  ngOnInit(): void {
    this.gettypedetails()
  }




  gettypedetails(){
    this.service.getType().subscribe(
      data => {
        console.log("response sent !!!")
        this.types=data
    },
      error => {
        console.log("error occured !!!")
      }
      )
    
    }

    typedetail(type:String){
      this.router.navigate(['/adminpetbreeds',type])
    }
}
