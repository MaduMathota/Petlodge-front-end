import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { Petowner } from '../../../models/petowner';
import { RegistrationService } from '../../../registration.service';

@Component({
  selector: 'app-adminpetownerpage',
  templateUrl: './adminpetownerpage.component.html',
  styleUrls: ['./adminpetownerpage.component.css']
})
export class AdminpetownerpageComponent implements OnInit {

  constructor(private service: RegistrationService,private router: Router) { }

  petowners : Array<Petowner> = new Array<Petowner> ();
  petowner: Petowner;
  editmode: boolean = false;
  size=12;

  ngOnInit(): void {

    this.getpetownerdetails();

  }

  getpetownerdetails(){
    this.service.getPetowner().subscribe(
      data => {
        console.log("response sent !!!")
        this.petowners=data
    },
      error => {
        console.log("error occured !!!")
      }
      )
    
    }

    editpetowner(petownerobj:Petowner){
      this.editmode = true;
      this.size=9
      this.petowner = petownerobj;
    }

    updatepetowner(){
        this.service.updatePetowner(this.petowner).subscribe(
          data =>{
            this.petowner = data;
          },

          error => {
            console.log("error occured !!!")
          }
        )
        window.location.reload();
    }

    deletepetowner(petownerobjid:String){
      
          Swal.fire({
            title: 'Are you sure?',
            text: 'do you want to delete this?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes!',
            cancelButtonText: 'No!',
    
          }).then((result) => {
            if (result.value) {
      
              this.service.deletePetowner(petownerobjid).subscribe(
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
