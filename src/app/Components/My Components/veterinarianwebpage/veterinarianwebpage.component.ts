import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Appointment } from '../../../models/appointment';
import { RegistrationService } from '../../../registration.service';
import { Veterinarian } from '../../../models/veterinarian';

@Component({
  selector: 'app-veterinarianwebpage',
  templateUrl: './veterinarianwebpage.component.html',
  styleUrls: ['./veterinarianwebpage.component.css']
})
export class VeterinarianwebpageComponent implements OnInit {

  str:string
  veterinarian: Veterinarian;
  appointments:Array<Appointment> = new Array<Appointment> ();
  
  

  constructor(private service: RegistrationService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((par: ParamMap)=>{
      this.str = par.get('id')
      this.getappoinments(this.str);
      this.getvetdetail(this.str);
      
    }
    )

  }


  getvetdetail(str:string){
  this.service.getVet(this.str).subscribe(
    data =>{
      this.veterinarian = data;
    },
    error =>{
      console.log("error occured !!!");
    }
  )
  }
  
      updatevet(){
         

              Swal.fire({
                title: 'Are you sure?',
                text: 'do you want to update this?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Yes!',
                cancelButtonText: 'No!',
        
              }).then((result) => {
                if (result.value) {
          
                  this.service.updateVet(this.veterinarian).subscribe(
                    data =>{
                      this.veterinarian = data;
        
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
  
      getappoinments(vtid:String){
        this.service.getAppointmentByVetId(vtid).subscribe(
          data=>{
            this.appointments = data;
          },
          error=>{
            console.log("error occured !!!")
          }
        )
      }
  
      changepsw(){

        if(this.veterinarian.password==this.veterinarian.confirmpsw){

          Swal.fire({
            title: 'Are you sure?',
            text: 'do you want to change password?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes!',
            cancelButtonText: 'No!',
    
          }).then((result) => {
            if (result.value) {
      
              this.service.updateVetpsw(this.veterinarian).subscribe(
                data =>{
                  console.log("password changed !!!");
    
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
    }

    removeapoinments(){

      Swal.fire({
        title: 'Are you sure?',
        text: 'do you want to remove appointments?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes!',
        cancelButtonText: 'No!',

      }).then((result) => {
        if (result.value) {
  
          this.service.deleteAppointmentByVetid(this.str).subscribe(
            data =>{
              console.log("deleted !!!");

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
  
      petdetails(id:String){
        this.router.navigate(["appointmentpetdetails",id]);
      }

     
  
      govideocall(){
        this.router.navigate(['/videocalling',this.veterinarian.id])
      }

      toHome(){
        document.getElementById("home").scrollIntoView({behavior:"smooth"});
      }

      toAppointment(){
        document.getElementById("appointment").scrollIntoView({behavior:"smooth"});
      }

      toAboutme(){
        document.getElementById("aboutme").scrollIntoView({behavior:"smooth"});
      }

      toPassword(){
        document.getElementById("password").scrollIntoView({behavior:"smooth"});
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
            this.router.navigate(['/vetlogin']);
          } 
        })
  
      }

}
