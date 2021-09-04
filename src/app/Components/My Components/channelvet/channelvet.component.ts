import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../../../registration.service';
import { Veterinarian } from '../../../models/veterinarian';


@Component({
  selector: 'app-channelvet',
  templateUrl: './channelvet.component.html',
  styleUrls: ['./channelvet.component.css']
})
export class ChannelvetComponent implements OnInit {

  constructor(private service: RegistrationService,private router: Router) { }

  vets : Array<Veterinarian> = new Array<Veterinarian> ();
  vet: Veterinarian;
  str:String;
  size=12;

  ngOnInit(): void {
    this.getvetdetails()
  }

  getvetdetails(){
    this.service.getVets().subscribe(
      data => {
        console.log("response sent !!!")
        this.vets=data
    },
      error => {
        console.log("error occured !!!")
      }
      )
    
    }

    channel(id:string){
      this.router.navigate(['/channelingdetailspage',id])
    }

  }

  



