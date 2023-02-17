import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtformpageComponent } from './pages/artforms/artforms.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { SignpageComponent } from './pages/signpage/signpage.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';

const routes: Routes = [
  {
    path:'home',component :HomepageComponent
  },
  {
    path:'contact',component :ContactpageComponent
  },
  {
    path:'signup',component :SignpageComponent
  },
  {
    path:'login',component :LoginpageComponent
  },
  {
    path:'artforms',component :ArtformpageComponent
  },
  {
    path:'single',component :SinglepageComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
