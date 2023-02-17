import { Component } from '@angular/core';
import { data } from 'src/assets/data';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-artformpage',
  templateUrl: './artforms.component.html',
  styleUrls: ['./artforms.component.css']
})
export class ArtformpageComponent {
 
  artform = data
ngOninit():void
{
  this.artform = data

}

constructor(private router:Router, private hero:HeroService)

{}
artforms=this.hero.giveData();
    gotoHere(id:any)
    {
      localStorage.setItem('id',id);
      this.router.navigate(['/single']);
  

    }

  }

