// Librerías.
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

// Importaciones de platforms.
import { PlatformsDtService } from '../services/platforms.dt-service';

@Component({
    selector: 'app-platforms',
    templateUrl: '../pages/platforms.page.html'
})
export class PlatformsComponent {

    constructor(
        titleService: Title,
        public platformsDtService: PlatformsDtService
    ) { 
        titleService.setTitle('Plataformas');
    }

}
