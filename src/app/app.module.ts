import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {KeyupComponent} from "./keyup/keyup.component";
import {HeroFormComponent} from "./hero-form/hero-form.component";
import {HeroEditorComponent} from "./hero-editor/hero-editor.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {HeroService} from "./hero.service";
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";

@NgModule({
    declarations: [
        AppComponent,
        KeyupComponent,
        HeroFormComponent,
        HeroEditorComponent,
        HeroDetailComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: 'heroes',
                component: HeroEditorComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'detail/:id',
                component: HeroDetailComponent
            }
        ])
    ],
    providers: [
        HeroService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
