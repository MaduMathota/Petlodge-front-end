import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Pettype } from 'src/app/models/pettype';
import { RegistrationService } from 'src/app/registration.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addtype',
  templateUrl: './addtype.component.html',
  styleUrls: ['./addtype.component.css']
})
export class AddtypeComponent implements OnInit {

  type = new Pettype;

  constructor(private service: RegistrationService, private router: Router) { }

  ngOnInit(): void {
  }


  addType() {
 
    Swal.fire({
      title: 'Are you sure?',
      text: 'do you want to Add this?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes!',
      cancelButtonText: 'No!',
      

    }).then((result) => {

      if (result.value) {

        this.service.createType(this.type).subscribe(
          data => {
            console.log("response received !!!")
            this.type = data;

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


}
