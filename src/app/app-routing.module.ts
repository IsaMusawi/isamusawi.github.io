import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ExpericenceComponent } from './expericence/expericence.component';
import { SkillComponent } from './skill/skill.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: "home", component: HomeComponent }
  , { path: "services", component: AboutmeComponent }
  , { path: "experience", component: ExpericenceComponent }
  , { path: "skill", component: SkillComponent }
  , { path: "contact", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
