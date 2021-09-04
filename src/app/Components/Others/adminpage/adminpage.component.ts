import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Admin } from '../../../models/admin';
import { RegistrationService } from '../../../registration.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  admins : Array<Admin> = new Array<Admin> ();
  admin: Admin;
  editmode: boolean = false;
  size=12;

  constructor(private service: RegistrationService,private router: Router) { }

  ngOnInit(): void {

    this.getadmindetails();

  }

  getadmindetails(){
    this.service.getadmins().subscribe(
      data => {
        console.log("response sent !!!")
        this.admins=data
    },
      error => {
        console.log("error occured !!!")
      }
      )
    
    }

    editadmin(adminobj:Admin){
      this.editmode = true;
      this.size=9
      this.admin = adminobj;
    }

    updateadmin(){
      if(window.confirm("do you want to update this asmin?")){
        this.service.updateadmin(this.admin).subscribe(
          data =>{
            this.admin = data;
          },

          error => {
            console.log("error occured !!!")
          }
        )
        window.location.reload();
    }
  }

    deleteadmin(adminobjid:String){

          Swal.fire({
            title: 'Are you sure?',
            text: 'do you want to delete this?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes!',
            cancelButtonText: 'No!',
    
          }).then((result) => {
            if (result.value) {
      
              this.service.deleteadmin(adminobjid).subscribe(
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
