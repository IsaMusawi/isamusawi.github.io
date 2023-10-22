import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ExpericenceComponent } from './expericence/expericence.component';
import { SkillComponent } from './skill/skill.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", redirectTo: '/home', pathMatch: 'full' }
  , { path: "home", component: HomeComponent }
  , { path: "services", component: AboutmeComponent }
  , { path: "skill", component: SkillComponent }
  , { path: "contact", component: ContactComponent }
  , { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
