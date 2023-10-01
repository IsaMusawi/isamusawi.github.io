import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ExpericenceComponent } from './expericence/expericence.component';
import { SkillComponent } from './skill/skill.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent
    , HomeComponent
    , HeaderComponent, AboutmeComponent, ExpericenceComponent, SkillComponent, ContactComponent
  ],
  imports: [
    BrowserModule
    , AppRoutingModule
    , MatToolbarModule
    , BrowserAnimationsModule
    , MatButtonModule
    , MatInputModule
    , MatCardModule
    , MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
