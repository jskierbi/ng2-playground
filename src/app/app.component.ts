import {Component} from "@angular/core";
import {Hero} from "./model/hero";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'This app rocks!';
    heroes = [
        new Hero(1, 'Windstorm'),
        new Hero(13, 'Bombasto'),
        new Hero(15, 'Magneta'),
        new Hero(20, 'Tornado')
    ];
    myHero = this.heroes[0];

    addHero(hero: string) {
        if (hero) {
            this.heroes.push(new Hero(0, hero))
        }
    }
}
