import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Petbreed } from 'src/app/models/petbreed';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-petbreeds',
  templateUrl: './petbreeds.component.html',
  styleUrls: ['./petbreeds.component.css']
})
export class PetbreedsComponent implements OnInit {

  breeds : Array<Petbreed> = new Array<Petbreed> ();
  breedone:Petbreed = new Petbreed;
  str:String;
  size=12;
  constructor(private service: RegistrationService,private router: Router,private route:ActivatedRoute,private modalService: NgbModal) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((par: ParamMap)=>{
      this.str= par.get('id')
      this.getbreedsdetails(this.str)
  }
    )

    
  }


  getbreedsdetails(type:String){
    this.service.getBreedByPetType(type).subscribe(
      data => {
        console.log("response sent !!!")
        this.breeds=data
    },
      error => {
        console.log("error occured !!!")
      }
      )
    
    }

    breeddetail(breed:String){
      this.router.navigate(['/petbreedsdetails',breed])
    }

    openScrollableContent(longContent,id:String) {
      this.service.getBreedById(id).subscribe(
        data => {
          console.log("response sent !!!")
          this.breedone=data
      },
        error => {
          console.log("error occured !!!")
        }
        )
      this.modalService.open(longContent, { scrollable: true });
    }


}
