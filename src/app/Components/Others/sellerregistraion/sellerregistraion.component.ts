import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Seller } from 'src/app/models/seller';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-sellerregistraion',
  templateUrl: './sellerregistraion.component.html',
  styleUrls: ['./sellerregistraion.component.css']
})
export class SellerregistraionComponent implements OnInit {

  
  seller = new Seller();
  mgs ='';

  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }


  registerSeller(){
    this._service.sellerRegisterFromRemote(this.seller).subscribe(
      data =>{  console.log("Response recieved");
      this._router.navigate(['/login']);
     
    },
      
      error =>{
      console.log("Exception Occured");
      this.mgs = error.any;
      } 
    )
  }

}
