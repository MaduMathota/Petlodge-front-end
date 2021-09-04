import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  category:String;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  getcategory(){
    this.router.navigate(['/itemcategory',this.category])
  }

}
