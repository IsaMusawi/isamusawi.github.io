import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMobile: boolean = false;

  showMenu = false;

  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

  constructor() { }

  ngOnInit(): void {

  }

}
