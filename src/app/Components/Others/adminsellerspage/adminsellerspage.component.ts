import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Seller } from 'src/app/models/seller';
import { RegistrationService } from 'src/app/registration.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminsellerspage',
  templateUrl: './adminsellerspage.component.html',
  styleUrls: ['./adminsellerspage.component.css']
})
export class AdminsellerspageComponent implements OnInit {

  sellers : Array<Seller> = new Array<Seller> ();
  seller: Seller;
  editmode: boolean = false;
  size=12;

  constructor(private service: RegistrationService,private router: Router) { }

  ngOnInit(): void {
    
    this.getsellerdetails();
  }


 




  getsellerdetails(){
    this.service.getSellers().subscribe(
      data => {
        console.log("response sent !!!")
        this.sellers=data
    },
      error => {
        console.log("error occured !!!")
      }
      )
    
    }

    editseller(sellerobj:Seller){
      this.editmode = true;
      this.size=9
      this.seller = sellerobj;
    }

    updateseller(){
      if(window.confirm("do you want to update this seller?")){
        this.service.sellerUpdateFromRemote(this.seller).subscribe(
          data =>{
            this.seller = data;
          },

          error => {
            console.log("error occured !!!")
          }
        )
        window.location.reload();
    }
  }

    deleteseller(sellerobjid:string){

          Swal.fire({
            title: 'Are you sure?',
            text: 'do you want to delete this?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes!',
            cancelButtonText: 'No!',
    
          }).then((result) => {
            if (result.value) {
      
              this.service.deleteSeller(sellerobjid).subscribe(
                data =>{
                  console.log("succesfully deleted !!!")
    
                  Swal.fire({
                    position:'center',
                    icon: 'success',
                    title: 'Done !!!',
                    showConfirmButton: false,
                    timer: 1500
                  })
                },
                  error => {
                  console.log("error occured !!!")
                  Swal.fire({
                    position:'center',
                    icon: 'error',
                    title: 'Something wrong !!!',
                    showConfirmButton: false,
                    timer: 1500
                  })
    
                }
              )
              window.location.reload();
    
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              Swal.fire({
                title: 'Dismissed !',
                showConfirmButton: false,
                timer: 1500
              })
            }
          }) 

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
