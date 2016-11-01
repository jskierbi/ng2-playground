import {Component} from "@angular/core";
import {HeroDetails} from "../model/HeroDetails";

@Component({
    selector: 'app-hero-form',
    templateUrl: './hero-form.component.html',
    styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
    powers = ['Really Smart',
        'Super flexible',
        'Super Hot',
        'Weather Charger'];

    model = new HeroDetails(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;

    onSubmit() { this.submitted = true; }

    get diagnostic() { return JSON.stringify(this.model); }
}
