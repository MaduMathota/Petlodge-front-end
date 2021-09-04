import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { Seller } from 'src/app/models/seller';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  str:String;
  seller:Seller;
  itemid:string;
  nn:Number;
  reciveditems: Array<Item> = new Array<Item> ();
  items: Array<Item> = new Array<Item> ();

  constructor(private service:RegistrationService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((par: ParamMap) => {
      this.itemid = par.get('id');
      this.nn=Number(this.itemid)
     this.viewdetails(this.itemid);
      
    }
    )
  }



  // viewdetails(id:string) {
  //   this.service.getItemById(id).subscribe(
  //     data => {
  //       console.log("response received !!!")
  //       this.item=data;

       
  //         const reciveditem = new Item();
  //         reciveditem.id = this.item.id;
  //         reciveditem.name = this.item.name;
  //         reciveditem.picByte = 'data:image/jpeg;base64,' + this.item.picByte;
  //         reciveditem.category = this.item.category;
  //         reciveditem.price = this.item.price;
  //         reciveditem.description = this.item.description;
  //         reciveditem.imagefilename= this.item.imagefilename;
  //         reciveditem.quantity= this.item.quantity;
  //         reciveditem.sellerid= this.item.sellerid;
  //         this.strrr="aaaa"
          
  //         this.getsellerdetail(this.item.sellerid)
  //   },
  //     error => {
  //       console.log("error occured !!!")
  //     }
  //     )
  // }

  viewdetails(id:string){

    this.service.getItemById(id).subscribe(
      data => {
        console.log("response received !!!")
        this.reciveditems.push(data);

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

          this.getsellerdetail(item.sellerid)
        }
    },
      error => {
        console.log("error occured !!!")
      }
      )
    
    }

    getsellerdetail(str: string) {

    this.service.sellerDetailsDesplayFromRemote(str).subscribe(
      data => {
        this.seller = data;
      },
      error => {
        console.log("error occured !!!");
      }
    )
  }

}
