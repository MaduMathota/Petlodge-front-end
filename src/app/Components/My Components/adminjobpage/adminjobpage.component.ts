import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from 'src/app/models/job';
import Swal from 'sweetalert2';

import { RegistrationService } from '../../../registration.service';

@Component({
  selector: 'app-adminjobpage',
  templateUrl: './adminjobpage.component.html',
  styleUrls: ['./adminjobpage.component.css']
})
export class AdminjobpageComponent implements OnInit {

  jobs : Array<Job> = new Array<Job> ();
  job:Job;
  editmodek: boolean = false;
  size=12;

  constructor(private service: RegistrationService,private router: Router) { }

  ngOnInit(): void {

    this.getjobdetails();

  }

  


  getjobdetails(){
    this.service.getJob().subscribe(
      data => {
        console.log("response send to frontend !!!")
        this.jobs=data
    },
      error => {
        console.log("error occured !!!")
      }
      )
    
    }

    editjob(jb:Job){
      this.editmodek = true;
      this.size=9
      this.job = jb;
    }

    updatejob(){
        this.service.updateJob(this.job).subscribe(
          data =>{
            this.job = data;
          },

          error => {
            console.log("error occured !!!")
          }
        )
        window.location.reload();
    }

    deletejob(jobid:Number){

      Swal.fire({
        title: 'Are you sure?',
        text: 'do you want to delete this?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes!',
        cancelButtonText: 'No!',

      }).then((result) => {
        if (result.value) {
  
          this.service.deleteJob(jobid).subscribe(
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
