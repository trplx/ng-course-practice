import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child1Component } from './components/child-1/child-1.component';
import { Child2Component } from './components/child-2/child-2.component';

@Component({
    selector: 'app-root',
    imports: [Child1Component, Child2Component],
    providers: [

    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {

}
