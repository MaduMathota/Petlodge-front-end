import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { Kennel } from 'src/app/models/kennel';
import Swal from 'sweetalert2';
//import { Kennel } from '../../kennel';
// import { RegistrationService } from '../../registration.service';

@Component({
  selector: 'app-adminstoragekennel',
  templateUrl: './adminstoragekennel.component.html',
  styleUrls: ['./adminstoragekennel.component.css']
})
export class AdminstoragekennelComponent implements OnInit {

  kennels : Array<Kennel> = new Array<Kennel> ();
  kennel: Kennel;
  editmodek: boolean = false;
  size=12;
  constructor(private service: RegistrationService,private router: Router) { }

  ngOnInit(): void {

    this.getkenneldetails();

  }

  getkenneldetails(){
    this.service.getKennel().subscribe(
      data => {
        console.log("response send to frontend !!!")
        this.kennels=data
        
    },
      error => {
        console.log("error occured !!!")
      }
      )
    
    }

    editkennel(ken:Kennel){
      this.editmodek = true;
      this.size=9
      this.kennel = ken;
    }

    updatekennel(){


      Swal.fire({
        title: 'Are you sure?',
        text: 'do you want to update this?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes!',
        cancelButtonText: 'No!',

      }).then((result) => {
        if (result.value) {
          this.service.updateKennel(this.kennel).subscribe(
            data =>{
              this.kennel = data;

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

    deletekennel(kennelid:String){
      
          Swal.fire({
            title: 'Are you sure?',
            text: 'do you want to delete this?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes!',
            cancelButtonText: 'No!',
    
          }).then((result) => {
            if (result.value) {
      
              this.service.deleteKennel(kennelid).subscribe(
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
