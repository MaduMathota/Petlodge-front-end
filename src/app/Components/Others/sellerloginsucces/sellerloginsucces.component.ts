import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Seller } from 'src/app/models/seller';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-sellerloginsucces',
  templateUrl: './sellerloginsucces.component.html',
  styleUrls: ['./sellerloginsucces.component.css']
})
export class SellerloginsuccesComponent implements OnInit {

    
  str: string

  seller: Seller = new Seller();
  toggledetails: boolean = false;
  togglepasward: boolean = false;

  constructor(private service: RegistrationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((par: ParamMap) => {
      this.str = par.get('id');
      this.getsellerdetail(this.str);
    }
    )

  }


  getsellerdetail(str: string) {

    this.service.sellerDetailsDesplayFromRemote(str).subscribe(
      data => {
        this.seller = data;
      },
      error => {
        console.log("error occured !!!");
      }
    )
  }

  toitem(){
   this.router.navigate(['/selleriteamwall',this.str]) 
  }

  logout() {

    localStorage.removeItem('isloged');
    this.router.navigate(['']);
  }
  toHome() {
    document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
  }
  toService() {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
  }
  toAboutme() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  }

  updateseller() {
    this.service.sellerUpdateFromRemote(this.seller).subscribe(
      data => {
        this.seller = data;
      },
      error => {
        console.log("error occured !!!")
      }
    )
    window.location.reload();
  }

  changepsw() {
    this.service.sellerPWDUpdateFromRemote(this.seller).subscribe(
      data => {
        this.seller = data;
      },

      error => {
        console.log("error occured !!!")
      }
    )
    window.location.reload();
  }

  toggleUpdatedetails() {
    this.toggledetails = !this.toggledetails;

  }

  toggleUpdaatepasward() {
    this.togglepasward = !this.togglepasward;
  }



}
