import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';


@Component({
  selector: 'app-superh',
  templateUrl: './superh.component.html'
})
export class SuperhComponent {

  superh:any = {};

  constructor( private activatedRoute: ActivatedRoute,
        
        private _heroesService: HeroesService
    
    ) { 
      
    this.activatedRoute.params.subscribe( params =>{

      console.log( params['id']); 

      this.superh = this._heroesService.getsuperh( params [ 'id' ]);

    })
  }
}

/* esta es parte original de superh.components.ts
    ===================== SIN MODIFICACAIONES ANTES DEL VIDEO 15 DE ANGULAR
    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-superh',
  templateUrl: './superh.component.html'
})
export class SuperhComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}



*/