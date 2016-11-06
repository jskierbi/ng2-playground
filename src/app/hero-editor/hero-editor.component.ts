import {Component, OnInit} from "@angular/core";
import {Hero} from "../model/Hero";
import {HeroService} from "../hero.service";


@Component({
    selector: 'app-hero-editor',
    templateUrl: './hero-editor.component.html',
    styleUrls: ['./hero-editor.component.css']
})
export class HeroEditorComponent implements OnInit {

    ngOnInit(): void {
        this.heroes = this.heroService.getHeroes();
    }

    title = 'Tour of Heroes';
    hero = new Hero(1, 'Windstorm');

    heroes : Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService) {
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

}
