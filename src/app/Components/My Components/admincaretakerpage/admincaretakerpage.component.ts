import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { Caretaker } from 'src/app/models/caretaker';
import { RegistrationService } from '../../../registration.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-admincaretakerpage',
  templateUrl: './admincaretakerpage.component.html',
  styleUrls: ['./admincaretakerpage.component.css']
})
export class AdmincaretakerpageComponent implements OnInit {

  caretakers : Array<Caretaker> = new Array<Caretaker> ();
  caretaker: Caretaker;
  editmode: boolean = false;
  size=12;
  
  constructor(private service: RegistrationService,private router: Router) { 

  }


  ngOnInit(): void {

    this.getcaretakerdetails();

  }

  getcaretakerdetails(){
    this.service.getcaretakers().subscribe(
      data => {
        console.log("response send to frontend !!!")
        this.caretakers=data
    },
      error => {
        console.log("error occured !!!")
      }
      )
    
    }

    getpetid(care:Caretaker){


    }

    editcaretaker(care:Caretaker){
      this.editmode = true;
      this.size=9
      this.caretaker = care;
    }

    updatecaretaker(){

      Swal.fire({
        title: 'Are you sure?',
        text: 'do you want to update this?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes!',
        cancelButtonText: 'No!',
        
  
      }).then((result) => {
  
        if (result.value) {
  
          this.service.updatecaretaker(this.caretaker).subscribe(
            data =>{
              this.caretaker = data;

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
            title: 'Dismissed !!!',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })

       
    }

    updatecaretakerpw(){

              Swal.fire({
                title: 'Are you sure?',
                text: 'do you want to change password?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Yes!',
                cancelButtonText: 'No!',
        
              }).then((result) => {
                if (result.value) {
          
                  this.service.updatecaretakerpsw(this.caretaker).subscribe(
                    data =>{
                      this.caretaker = data;
        
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

    deletecaretaker(careid:String){

      Swal.fire({
        title: 'Are you sure?',
        text: 'do you want to delete this?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes!',
        cancelButtonText: 'No!',

      }).then((result) => {
        if (result.value) {
  
          this.service.deletecaretaker(careid).subscribe(
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
