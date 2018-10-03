import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  lafiecoLink = "http://www.lafieco.com.br";

  constructor() { }

  ngOnInit() {

  }

  redirectToLafiecoWebsite(): void {
    window.open("http://www.lafieco.com.br", "_blank");
  }


}
