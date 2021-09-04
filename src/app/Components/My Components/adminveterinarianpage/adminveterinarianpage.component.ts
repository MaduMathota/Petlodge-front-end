import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RegistrationService } from '../../../registration.service';
import { Veterinarian } from '../../../models/veterinarian';

@Component({
  selector: 'app-adminveterinarianpage',
  templateUrl: './adminveterinarianpage.component.html',
  styleUrls: ['./adminveterinarianpage.component.css']
})
export class AdminveterinarianpageComponent implements OnInit {

  constructor(private service: RegistrationService,private router: Router) { }

veterinarians : Array<Veterinarian> = new Array<Veterinarian> ();
veterinarian: Veterinarian;
editmode: boolean = false;
size=12;

  ngOnInit(): void {

    this.getvetdetails()

  }


  getvetdetails(){
    this.service.getVets().subscribe(
      data => {
        console.log("response send to frontend !!!")
        this.veterinarians=data
    },
      error => {
        console.log("error occured !!!")
      }
      )
    
    }

    editvet(vet:Veterinarian){
      this.editmode = true;
      this.size=9
      this.veterinarian = vet;
    }

    updatevet(){
        this.service.updateVet(this.veterinarian).subscribe(
          data =>{
            this.veterinarian = data;
          },

          error => {
            console.log("error occured !!!")
          }
        )
        window.location.reload();
    }

    deletevet(vetid:string){

          Swal.fire({
            title: 'Are you sure?',
            text: 'do you want to delete this?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes!',
            cancelButtonText: 'No!',
    
          }).then((result) => {
            if (result.value) {
      
              this.service.deleteVet(vetid).subscribe(
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
