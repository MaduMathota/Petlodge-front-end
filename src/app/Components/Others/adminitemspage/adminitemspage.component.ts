import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-adminitemspage',
  templateUrl: './adminitemspage.component.html',
  styleUrls: ['./adminitemspage.component.css']
})
export class AdminitemspageComponent implements OnInit {

  reciveditems: Array<Item> = new Array<Item> ();
  items: Array<Item> = new Array<Item> ();
  str:String;
  sellerid:String;

  constructor(private service: RegistrationService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

      this.getItems();
  }
  

getItems(){

  this.service.getItems().subscribe(
    data => {
      console.log("response received !!!")
      this.reciveditems=data;

      for (const item of this.reciveditems) { 
        const newitem = new Item();
        newitem.id = item.id;
        newitem.name = item.name;
        //populate retrieved image field so that book image can be displayed
        newitem.picByte = 'data:image/jpeg;base64,' + item.picByte;
        newitem.category = item.category;
        newitem.price = item.price;
        newitem.description = item.description;
        newitem.imagefilename= item.imagefilename;
        newitem.quantity= item.quantity;

        this.items.push(newitem);
      }
  },
    error => {
      console.log("error occured !!!")
    }
    )

}

  getItemsbyid(){

    this.router.navigate(["adminselleritempage/"+this.sellerid])
    
    }

    toUpdatePage(str:Number){

      this.router.navigate(['updateitem/'+str]) ;
    }

    toDelete(str:Number){
      this.service.deleteItem(str).subscribe(
        data => {
          console.log("resnponse received !!!")
         
          
      },
        error => {
          console.log("error occured !!!")
        }
        )

        window.location.reload();
      
    }

}
