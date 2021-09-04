import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Petbreed } from 'src/app/models/petbreed';
import { RegistrationService } from 'src/app/registration.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminpetbreeds',
  templateUrl: './adminpetbreeds.component.html',
  styleUrls: ['./adminpetbreeds.component.css']
})
export class AdminpetbreedsComponent implements OnInit {

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

    deletebreed(id:String){

        Swal.fire({
          title: 'Are you sure?',
          text: 'do you want to delete this?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Yes!',
          cancelButtonText: 'No!',
  
        }).then((result) => {
          if (result.value) {
    
            this.service.deleteBreed(id).subscribe(
              data => {
                console.log("delete succefully !!!")
  
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
}
