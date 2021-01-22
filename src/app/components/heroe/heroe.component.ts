import { Component, OnInit } from '@angular/core';
import { HeroesService} from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {
  heroes:any[] = [];

  constructor( private _heroesService:HeroesService,
               private router:Router
    ) { 
    //console.log("constructor");

  }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    
  }
  verHeroe( idx:number){
    this.router.navigate([ '/superh',idx ]);
  }

}
