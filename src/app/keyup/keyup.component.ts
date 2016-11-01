import {Component} from "@angular/core";

@Component({
    selector: 'click-me',
    templateUrl: './keyup.component.html',
    styleUrls: ['./keyup.component.css']
})
export class KeyupComponent {

    clickMessage = '';
    values = '';

    onClickMe() {
        this.clickMessage = 'You are my hero!';
    }

    onKey(event: KeyboardEvent) {
        this.values += (<HTMLInputElement>event.target).value + ' | ';
    }
}
