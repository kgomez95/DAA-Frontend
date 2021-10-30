// Librerías.
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-shared-navbar',
    templateUrl: '../pages/navbar.page.html'
})
export class NavbarComponent {

    public isCollapsed: boolean = true;

    constructor(
        private router: Router
    ) { }

}
