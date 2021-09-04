import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-updateitem',
  templateUrl: './updateitem.component.html',
  styleUrls: ['./updateitem.component.css']
})
export class UpdateitemComponent implements OnInit {

  image:boolean = true;
  notimage:boolean = false;
  itemid:string;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;

  item = new Item;

  constructor(private service:RegistrationService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((par: ParamMap)=>{ 
      this.itemid = par.get('id') ;   
        this.getItem(this.itemid);
          }
     )

  }





  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

  getItem(itemid:string){
    this.service.getItemById(itemid).subscribe(
      data => {
        this.item = data;
      },
      error => {
        console.log("error occured !!!")
      }
    )
    
  }

  updateItemdetails(){
   
    this.service.updateItem(this.item).subscribe(
      data => {
        console.log("response received !!!")
       
        // this.router.navigate(['/loginsuccess'])
    },
      error => {
        console.log("error occured !!!")
      }
      )
    
    }

    imageMode(){
      this.image=false;
      this.notimage=true;
    }

    itemimageAdd(){

      this.item.imagefilename = this.selectedFile.name;
      const uploadImageData = new FormData();

    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
      this.service.additemfromimage(uploadImageData).subscribe(
        data => {
          console.log(data);
          // this.router.navigate(['/loginsuccess'])
      },
        error => {
          console.log("error occured !!!")
        }
        )
      
      }


}
