import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, observable } from 'rxjs';
import { Caretakerdto } from 'src/app/models/caretakerdto';
import { Job } from 'src/app/models/job';
import Swal from 'sweetalert2';

import { RegistrationService } from '../../../registration.service';

@Component({
  selector: 'app-jobassign',
  templateUrl: './jobassign.component.html',
  styleUrls: ['./jobassign.component.css']
})
export class JobassignComponent implements OnInit {

  job = new Job;
  caretakerdtos:Array<Caretakerdto> = new Array<Caretakerdto>() ;
  constructor(private service:RegistrationService,private router:Router,private modalService: NgbModal) { }

  ngOnInit(): void {

    this.getcaredto();
  }

  jobassign(){
    this.service.createJob(this.job).subscribe(
      data=>{
        console.log("response received !!!")
        this.router.navigate(['/adminpetregisterpage'])
    },
      error => {
        console.log("error occured !!!")
      }
    )
  }

  getcaredto(){
    this.service.getcaretakerdto().subscribe(
      data=>{
        this.caretakerdtos=data;
        console.log("response received !!!")
    },
      error => {
        console.log("error occured !!!")
      }
    )
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

  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }

}
