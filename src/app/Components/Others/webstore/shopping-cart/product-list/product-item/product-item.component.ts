import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  reciveditems: Array<Item> = new Array<Item> ();
  items: Array <Item> = new Array<Item>();
  str:String;
  category:String;

  constructor(private service:RegistrationService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((par: ParamMap) => {
      this.category = par.get('id');
     this.getItems(this.category);
    }
    )
  }

  getItems(category:String){

    this.service.getItemByItemCategory(category).subscribe(
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

    viewdetails(id:String){
      this.router.navigate(['/itemdetails',id])
    }

}
