import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Medicine } from '../../../models/medicine';
import { RegistrationService } from '../../../registration.service';

@Component({
  selector: 'app-adminstoragemedicine',
  templateUrl: './adminstoragemedicine.component.html',
  styleUrls: ['./adminstoragemedicine.component.css']
})
export class AdminstoragemedicineComponent implements OnInit {

  medicines : Array<Medicine> = new Array<Medicine> ();
  medicine: Medicine;
  editmodem:boolean=false
  size=12

  constructor(private service: RegistrationService,private router: Router) { }

  ngOnInit(): void {

    this.getmedicinedetails();

  }

    getmedicinedetails(){
      this.service.getMedicine().subscribe(
        data => {
          console.log("response send to frontend !!!")
          this.medicines=data
      },
        error => {
          console.log("error occured !!!")
        }
        )
      
      }



    editmedicine(med:Medicine){
      this.editmodem = true;
      this.size=9
      this.medicine = med;
    }

    updatemedicine(){
     

          Swal.fire({
            title: 'Are you sure?',
            text: 'do you want to update this?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes!',
            cancelButtonText: 'No!',
    
          }).then((result) => {
            if (result.value) {
      
              this.service.updateMedicine(this.medicine).subscribe(
                data =>{
                  this.medicine= data;
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

    deletemedicine(medicineid:String){
      
          Swal.fire({
            title: 'Are you sure?',
            text: 'do you want to delete this?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes!',
            cancelButtonText: 'No!',
    
          }).then((result) => {
            if (result.value) {
      
              this.service.deleteMedicine(medicineid).subscribe(
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

    createMedicinehtmlreport(){
    
      Swal.fire({
        title: 'Are you sure?',
        text: 'do you want create Food report?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes!',
        cancelButtonText: 'No!',
  
      }).then((result) => {
        if (result.value) {
  
          this.service.reporthtmlMedicine().subscribe(
            data =>{
              console.log("succesfully report created !!!")
  
              Swal.fire({
                position:'center',
                icon: 'success',
                title: 'Done !!!',
                text: 'Please Check your file location',
                showConfirmButton: false,
                timer: 1500
              })
            },
              error => {
              console.log("error occured !!!")
              Swal.fire({
                position:'center',
                icon: 'success',
                title: 'Done !!!',
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

      createMedicinepdfreport(){
    
        Swal.fire({
          title: 'Are you sure?',
          text: 'do you want create Food report?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Yes!',
          cancelButtonText: 'No!',
    
        }).then((result) => {
          if (result.value) {
    
            this.service.reportpdfMedicine().subscribe(
              data =>{
                console.log("succesfully report created !!!")
    
                Swal.fire({
                  position:'center',
                  icon: 'success',
                  title: 'Done !!!',
                  text: 'Please Check your file location',
                  showConfirmButton: false,
                  timer: 1500
                })
              },
                error => {
                console.log("error occured !!!")
                Swal.fire({
                  position:'center',
                  icon: 'success',
                  title: 'Successfully done',
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
