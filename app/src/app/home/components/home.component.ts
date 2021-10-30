// Librerías.
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    templateUrl: '../pages/home.page.html'
})
export class HomeComponent {

    constructor(
        titleService: Title
    ) { 
        titleService.setTitle('Inicio');
    }

}
