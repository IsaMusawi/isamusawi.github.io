import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ExpericenceComponent } from './expericence/expericence.component';
import { SkillComponent } from './section/skill/skill.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OverviewComponent } from './section/overview/overview.component';
import { ProjectsComponent } from './section/projects/projects.component';

const routes: Routes = [
  // { path: "", redirectTo: '/home', pathMatch: 'full' }
  { path: '', component: OverviewComponent, title: 'Overview' }
  // , { path: "home", component: HomeComponent }
  , { path: "contact", component: ContactComponent }
  // , { path: "contact", component: OverviewComponent, title: 'Overview' }
  , { path: "projects", component: ProjectsComponent, title: 'Projects' }
  , { path: "experience", component: ExpericenceComponent, title: 'Experience' }
  , { path: "**", redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
