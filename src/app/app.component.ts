import {Component} from "@angular/core";
import {Hero} from "./model/Hero";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Heroes app!';
    heroes: Hero[] = [];

    addHero(hero: string) {
        if (hero) {
            this.heroes.push(new Hero(0, hero))
        }
    }
}
