import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  appointmentid:String

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((par: ParamMap)=>{
      this.appointmentid = par.get('id')
  }
    )

  }

  goback(){
    this.router.navigate(['/petlodge'])
  }

}
