import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero: string = 'Windstorm';
  hero : Hero = {
    id: 1,
    name: 'Windstorm'
  }
  heroes: Hero[] = HEROES;
  selectedHero: Hero;
  
  constructor() { }

  ngOnInit() {

  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
