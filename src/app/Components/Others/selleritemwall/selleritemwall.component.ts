import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-selleritemwall',
  templateUrl: './selleritemwall.component.html',
  styleUrls: ['./selleritemwall.component.css']
})
export class SelleritemwallComponent implements OnInit {

  str:string;
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((par: ParamMap) => {
      this.str = par.get('id');
      
    }
    )
  }

  itemadd(){
    this.router.navigate(['/additem',this.str])
  }

  itemlist(){
    this.router.navigate(['/selleritemlist',this.str])
  }


}
