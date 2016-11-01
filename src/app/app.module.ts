import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {KeyupComponent} from "./keyup/keyup.component";
import {HeroFormComponent} from "./hero-form/hero-form.component";

@NgModule({
    declarations: [
        AppComponent,
        KeyupComponent,
        HeroFormComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
