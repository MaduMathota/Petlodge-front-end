import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Caretaker } from 'src/app/models/caretaker';
import { Pet } from 'src/app/models/pet';

import { RegistrationService } from '../../../registration.service';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {

  constructor(private service: RegistrationService, private router: Router, private route: ActivatedRoute) { }

  pets: Array<Pet> = new Array<Pet>();
  caretaker: Caretaker
  pet: Pet;
  str: String
  editmode: boolean = false;
  size = 12;

  ngOnInit(): void {

    this.route.paramMap.subscribe((par: ParamMap) => {
      this.str = par.get('id')
      this.getpetdetails(this.str);
    }
    )

  }

  getpetdetails(str: String) {
    this.service.getpetById(this.str).subscribe(
      data => {
        console.log("response sent !!!")
        this.pet = data
      },
      error => {
        console.log("error occured !!!")
      }
    )

  }

  editpet(pet: Pet) {
    this.editmode = true;
    this.size = 9
    this.pet = pet;
  }

  updatepet() {
    this.service.updatepet(this.pet).subscribe(
      data => {
        this.pet = data;
      },

      error => {
        console.log("error occured !!!")
      }
    )
    window.location.reload();
  }

}
