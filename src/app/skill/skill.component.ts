import { Component, OnInit } from '@angular/core';

import { Constant } from 'src/constant';
import { SkillModels } from '../model/skillModels';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skills: SkillModels[] = [];

  constructor() { }

  ngOnInit(): void {
    this.skills.push({title: Constant.java, urlImg: "assets/img/icons8-pc-48.png"});
    this.skills.push({title: Constant.python, urlImg: "assets/img/icons8-pc-48.png"});
    this.skills.push({title: Constant.Angular, urlImg: "assets/img/icons8-pc-48.png"});
    this.skills.push({title: Constant.tailwindCss, urlImg: "assets/img/icons8-pc-48.png"});
    this.skills.push({title: Constant.oracleSql, urlImg: "assets/img/icons8-pc-48.png"});
    this.skills.push({title: Constant.postgreSql, urlImg: "assets/img/icons8-pc-48.png"});
    this.skills.push({title: Constant.monggoDb, urlImg: "assets/img/icons8-pc-48.png"});
  }

}
