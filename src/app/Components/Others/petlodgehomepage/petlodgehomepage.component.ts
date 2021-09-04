import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-petlodgehomepage',
  templateUrl: './petlodgehomepage.component.html',
  styleUrls: ['./petlodgehomepage.component.css']
})
export class PetlodgehomepageComponent implements OnInit {

  constructor(router:Router) { }

  ngOnInit(): void {
    const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});
  }

}
