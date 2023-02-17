import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { SignpageComponent } from './pages/signpage/signpage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { ArtformpageComponent } from './pages/artforms/artforms.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactpageComponent,
    SignpageComponent,
    LoginpageComponent,
    ArtformpageComponent,
    NavbarComponent,
    FooterComponent,
    SinglepageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
