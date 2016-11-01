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

  model : HeroDetails;
  submitted = false;
  active = true;

  constructor() {
    this.newHero();
  }

  onSubmit() {
    this.submitted = true;
  }

  newHero() {
    this.model = new HeroDetails(0, '', '');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
