import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatExpansionModule } from '@angular/material/expansion';
import { ScrollingModule } from '@angular/cdk/scrolling'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ExpericenceComponent } from './expericence/expericence.component';
import { SkillComponent } from './skill/skill.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PopupComponent } from './popup/popup.component';


@NgModule({
  declarations: [
    AppComponent
    , HomeComponent
    , HeaderComponent, AboutmeComponent, ExpericenceComponent, SkillComponent, ContactComponent, PageNotFoundComponent, PopupComponent
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
    , ScrollingModule
    , MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
