import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from 'src/app/models/pet';
import Swal from 'sweetalert2';

import { RegistrationService } from '../../../registration.service';

@Component({
  selector: 'app-adminpetpage',
  templateUrl: './adminpetpage.component.html',
  styleUrls: ['./adminpetpage.component.css']
})
export class AdminpetpageComponent implements OnInit {

  constructor(private service: RegistrationService,private router: Router) { }

  pets : Array<Pet> = new Array<Pet> ();
  pet: Pet;
  editmode: boolean = false;
  size=12;

  ngOnInit(): void {

    this.getpetdetails();
  }



  getpetdetails(){
    this.service.getpet().subscribe(
      data => {
        console.log("response sent !!!")
        this.pets=data
    },
      error => {
        console.log("error occured !!!")
      }
      )
    
    }

    editpet(petobj:Pet){
      this.editmode = true;
      this.size=9
      this.pet = petobj;
    }

    updatepet(){
        this.service.updatepet(this.pet).subscribe(
          data =>{
            this.pet = data;
          },

          error => {
            console.log("error occured !!!")
          }
        )
        window.location.reload();
    }

    deletepet(petobjid:String){
      
          Swal.fire({
            title: 'Are you sure?',
            text: 'do you want to delete this?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes!',
            cancelButtonText: 'No!',
    
          }).then((result) => {
            if (result.value) {
      
              this.service.deletepet(petobjid).subscribe(
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
