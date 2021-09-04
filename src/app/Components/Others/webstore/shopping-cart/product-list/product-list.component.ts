import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  reciveditems: Array<Item> = new Array<Item> ();
  items: Array<Item> = new Array<Item> ();
  str:String;
  //productList: Item[] = []
  //wishlist: number[] = []

  constructor(private service:RegistrationService,private router:Router) { }

  ngOnInit(): void {
    this.loadProducts();
    //this.loadWishlist();
  }

  loadProducts() {
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

  viewdetails(id:String){
    this.router.navigate(['/itemdetails',id])
  }


  // loadWishlist() {
  //   this.wishlistService.getWishlist().subscribe(productIds => {
  //     this.wishlist = productIds
  //   })
  // }

}
