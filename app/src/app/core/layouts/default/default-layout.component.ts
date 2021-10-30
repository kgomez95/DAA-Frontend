// Librerías.
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-default-layout',
    templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {

    constructor(
        public titleService: Title,
    ) { }

}
