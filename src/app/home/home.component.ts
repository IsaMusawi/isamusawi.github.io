import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Constant } from 'src/constant';
import { HomeModel } from './../model/homeModel';
import { MatDialog } from '@angular/material/dialog';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { SkillComponent } from '../skill/skill.component';
import { ExpericenceComponent } from '../expericence/expericence.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeModel: HomeModel = {} as HomeModel;

  constructor(
    private route: ActivatedRoute
    , private router: Router
    , private dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if(fragment){
        const element = document.getElementById(fragment);
        if(element){
          element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        }
      }
    });

    // this.homeModel = {name: Constant.nameValue, title: Constant.title};
    this.homeModel.name = Constant.nameValue;
    this.homeModel.title = Constant.title;
  }

  navigateToAnchor(anchor : string){
    this.router.navigate([], { fragment: anchor, relativeTo: this.route });
  }

  openPopupSpecialied(): void{
    const dialogRef = this.dialog.open(AboutmeComponent, {
      width: '75%'
      , height : '70%'
      ,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog');
    });
  }

  openPopupSkill(): void{
    const dialogRef = this.dialog.open(SkillComponent, {
      width: '75%'
      , height : '70%'
      ,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog');
    });
  }

  openPopupExperience(): void{
    const dialogRef = this.dialog.open(ExpericenceComponent, {
      width: '75%'
      , height : '70%'
      ,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog');
    });
  }

}
