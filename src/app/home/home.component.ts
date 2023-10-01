import { HomeModel } from './../model/homeModel';
import { Component, OnInit } from '@angular/core';

import { Constant } from 'src/constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeModel: HomeModel = {} as HomeModel;

  constructor() { }

  ngOnInit(): void {
    // this.homeModel = {name: Constant.nameValue, title: Constant.title};
    this.homeModel.name = Constant.nameValue;
    this.homeModel.title = Constant.title;
  }

}
