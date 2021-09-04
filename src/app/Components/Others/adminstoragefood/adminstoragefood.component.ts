import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from 'src/app/models/food';
import Swal from 'sweetalert2';

import { RegistrationService } from '../../../registration.service';

@Component({
  selector: 'app-adminstoragefood',
  templateUrl: './adminstoragefood.component.html',
  styleUrls: ['./adminstoragefood.component.css']
})
export class AdminstoragefoodComponent implements OnInit {

  foods : Array<Food> = new Array<Food> ();
  food: Food;
  editmodef: boolean = false;
  editmodefa: boolean = false;
  size=12;
  constructor(private service: RegistrationService,private router: Router) { }

  ngOnInit(): void {

    this.getfooddetails()

  }
      getfooddetails(){
        this.service.getFood().subscribe(
          data => {
            console.log("response send to frontend !!!")
            this.foods=data
        },
          error => {
            console.log("error occured !!!")
          }
          )
        
        }

    editfood(fod:Food){
      this.editmodef = true;
      this.size=9
      this.food = fod;
    }

  updatefood(){

    Swal.fire({
      title: 'Are you sure?',
      text: 'do you want to update this?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes!',
      cancelButtonText: 'No!',

    }).then((result) => {
      if (result.value) {

        this.service.updateFood(this.food).subscribe(
          data =>{
            this.food= data;

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

    deletefood(foodid:String){
 
          Swal.fire({
            title: 'Are you sure?',
            text: 'do you want to delete this?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes!',
            cancelButtonText: 'No!',
    
          }).then((result) => {
            if (result.value) {
      
              this.service.deleteFood(foodid).subscribe(
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

    addmenuopening(){
      this.editmodefa=true
    }

    createfoodpdfreport(){
    
    Swal.fire({
      title: 'Are you sure?',
      text: 'do you want create Food report?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes!',
      cancelButtonText: 'No!',

    }).then((result) => {
      if (result.value) {

        this.service.reportpdfFood().subscribe(
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
              icon: 'error',
              title: 'Successfully done !!!',
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


    createfoodhtmlreport(){
    
      Swal.fire({
        title: 'Are you sure?',
        text: 'do you want create Food report?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes!',
        cancelButtonText: 'No!',
  
      }).then((result) => {
        if (result.value) {
  
          this.service.reporthtmlFood().subscribe(
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
