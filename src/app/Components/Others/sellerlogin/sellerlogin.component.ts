import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Seller } from 'src/app/models/seller';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-sellerlogin',
  templateUrl: './sellerlogin.component.html',
  styleUrls: ['./sellerlogin.component.css']
})
export class SellerloginComponent implements OnInit {

  seller = new Seller();
  mgs = '';

  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }

  
  loginSeller() {
    this._service.sellerLoginFromRemote(this.seller).subscribe(

      data => {

        console.log("Responce recived")
        this._router.navigate(['/sellerloginsucces',this.seller.sellerId])

      },

      error => {
        console.log("Exception Occured");
        this.mgs = "Bad credential, please enter valid data "
      }
    )
  }

}
