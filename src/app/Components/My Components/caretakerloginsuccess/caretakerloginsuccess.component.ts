import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Job } from 'src/app/models/job';
import Swal from 'sweetalert2';

import { RegistrationService } from '../../../registration.service';

@Component({
  selector: 'app-caretakerloginsuccess',
  templateUrl: './caretakerloginsuccess.component.html',
  styleUrls: ['./caretakerloginsuccess.component.css']
})
export class CaretakerloginsuccessComponent implements OnInit {

  constructor(private service: RegistrationService,private router: Router,private route:ActivatedRoute) { }

  jobs : Array<Job> = new Array<Job> ();
  job: Job;
  str:String
  size=12;
  
  ngOnInit(): void {

    this.route.paramMap.subscribe((par: ParamMap)=>{
    this.str = par.get('id')
    this.getjobdetails(this.str);

  }
    )

  }

  getjobdetails(str:String){
    this.service.getjobByCaretakerId(this.str).subscribe(
      data => {
        console.log("response sent !!!")
        this.jobs=data
    },
      error => {
        console.log("error occured !!!")
      }
      )
    
    }

    editjob(jb:Job){
      this.router.navigate(['/loginsuccess',jb.petid]);
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
      this.router.navigate(['/caretakerlogin']);

        } 
      })

    }

}
