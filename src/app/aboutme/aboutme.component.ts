import { Component, OnInit } from '@angular/core';

import { ServicesModel } from '../model/servicesModel';
import { Constant } from 'src/constant';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  services: ServicesModel[] = [];
  serviceDesk: ServicesModel = {} as ServicesModel;
  serviceWeb: ServicesModel = {} as ServicesModel;

  constructor() { }

  ngOnInit(): void {
    // const jsonData = '{"title": "App Dev", "urlImage": "", "desc":"desktop dev}';
    // this.parseData = JSON.parse(jsonData);
    this.serviceDesk = {title: Constant.deskDev, urlImage: "assets/img/icons8-pc-48.png", desc:Constant.deskDesc};
    this.serviceWeb = {title: Constant.webDev, urlImage: "assets/img/icons8-website-50.png", desc:Constant.webDesc};
    this.services.push(this.serviceDesk);
    this.services.push(this.serviceWeb);
    console.log(this.services)
  }

}
