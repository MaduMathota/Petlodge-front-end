import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  selectedFile: File;
  retrievedImage: any;
  base64Data: any;

  sellerid:string;
  item = new Item;

  constructor(private service:RegistrationService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((par: ParamMap) => {
      this.sellerid = par.get('id');
      this.item.sellerid = this.sellerid;
    }
    )
  }

  public onFileChanged(event) {
 
    this.selectedFile = event.target.files[0];
  }

  itemAdd(){
    this.item.imagefilename= this.selectedFile.name;
    
    
    this.service.addItem(this.item).subscribe(
      data => {
        console.log("response received !!!")
        this.itemimageAdd();
        // this.router.navigate(['/loginsuccess'])
    },
      error => {
        console.log("error occured !!!")
      }
      )
    
    }

    itemimageAdd(){
      const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
      this.service.additemfromimage(uploadImageData,).subscribe(
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
