import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toHero(){
    document.getElementById("hero").scrollIntoView({behavior:"smooth"});
  }
  toAbout(){
    document.getElementById("about").scrollIntoView({behavior:"smooth"});
  }
  toServices(){
    document.getElementById("services").scrollIntoView({behavior:"smooth"});
  }
  toPortfolio()
  {
    document.getElementById("portfolio").scrollIntoView({behavior:"smooth"});
  }
  toTeam()
  {
    document.getElementById("team").scrollIntoView({behavior:"smooth"});
  }
  toPricing()
  {
    document.getElementById("pricing").scrollIntoView({behavior:"smooth"});
  }
  toContact()
  {
    document.getElementById("contact").scrollIntoView({behavior:"smooth"});
  }


}
