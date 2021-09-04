import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Petbreed } from 'src/app/models/petbreed';
import { Pettype } from 'src/app/models/pettype';
import { RegistrationService } from 'src/app/registration.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addbreed',
  templateUrl: './addbreed.component.html',
  styleUrls: ['./addbreed.component.css']
})
export class AddbreedComponent implements OnInit {

  breed= new Petbreed;
  types : Array<Pettype> = new Array<Pettype> ();

  constructor(private service: RegistrationService, private router: Router) { }

  ngOnInit(): void {
    this.gettypedetails()
  }

  addBreed() {

    Swal.fire({
      title: 'Are you sure?',
      text: 'do you want to Add this?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes!',
      cancelButtonText: 'No!',
      

    }).then((result) => {

      if (result.value) {

        this.service.createBreed(this.breed).subscribe(
          data => {
            console.log("response received !!!")
            this.breed = data;

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

}
