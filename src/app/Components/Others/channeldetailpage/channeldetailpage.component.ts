import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Appointment } from '../../../models/appointment';
import { AppointmentPet } from 'src/app/models/appointment-pet';

import { RegistrationService } from '../../../registration.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-channeldetailpage',
  templateUrl: './channeldetailpage.component.html',
  styleUrls: ['./channeldetailpage.component.css']
})
export class ChanneldetailpageComponent implements OnInit {

  linkone:string;
  linktwo:string;
  constructor(private service: RegistrationService,private router: Router,private route: ActivatedRoute) { }

  dateis = new Date()
  appointmode:boolean=false
  formmode:boolean=true
  appointmentpet = new AppointmentPet;
  appointment = new Appointment;
  

  ngOnInit(): void {
   
    this.route.paramMap.subscribe((par: ParamMap)=>{
      this.appointment.vetid = par.get('id')
  }
    )
}

    petAppointment(){
      Swal.fire({
        title: '<strong>Please wait !!!</strong>',
        icon: 'info',
        html:
          '<p>Your Appointment is processing...</p>'+
          '<iframe width="410vw" height="231vh" src="assets/image/pets.mp4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          // '<p>wait <iframe width="40vw" height="40vw" src="assets/image/pets.mp4"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> seconds</p>',
    
        focusConfirm: false,
        confirmButtonText:
          'Close the video.I can wait <i class="fa fa-thumbs-up"></i> ',
      })
      this.service.createAppointmentPet(this.appointmentpet).subscribe(
        data => {
          this.appointmentpet=data;
          console.log("response received !!!")
          this.createAppointment(this.appointmentpet)
          
          
      },
        error => {
          console.log("error occured !!!")
        }
        )
      }

      createAppointment(pet:AppointmentPet){
        this.appointment.appointPetid = pet.appointmentpetid
        this.appointment.date= this.dateis.toLocaleDateString()
        this.appointment.time= this.dateis.toLocaleTimeString()
        

        this.service.createAppointment(this.appointment).subscribe(
          data => {
            this.appointment=data;
            console.log("response received !!!")
            this.gotoappointment()
        },
          error => {
            console.log("error occured !!!")
          }
          )
      
      }

      gotoappointment(){
        this.formmode=false
        this.appointmode=true
      }

      goback(){
        this.router.navigate(['/petlodge'])
      }

      govideocall(){
        this.router.navigate(['/videocalling',this.appointment.vetid])
      }

    }
