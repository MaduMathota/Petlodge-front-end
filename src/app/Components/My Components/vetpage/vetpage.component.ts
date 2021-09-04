import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Appointment } from '../../../models/appointment';
import { RegistrationService } from '../../../registration.service';
import { Veterinarian } from '../../../models/veterinarian';

@Component({
  selector: 'app-vetpage',
  templateUrl: './vetpage.component.html',
  styleUrls: ['./vetpage.component.css']
})
export class VetpageComponent implements OnInit {

str:string
pswmode:boolean=true
editmode: boolean = false;
size=9;
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

    editvet(vetobj:Veterinarian){
      this.editmode = true;
      this.size=9
      this.veterinarian = vetobj;
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
      this.pswmode=false
    }

    petdetails(id:String){
      this.router.navigate(["appointmentpetdetails",id]);
    }

    govideocall(){
      this.router.navigate(['/videocalling',this.veterinarian.id])
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


