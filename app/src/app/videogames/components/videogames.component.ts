// Librerías.
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

// Importaciones de videogames.
import { VideoGamesDtService } from '../services/videogames.dt-service';

@Component({
    selector: 'app-videogames',
    templateUrl: '../pages/videogames.page.html'
})
export class VideoGamesComponent {

    constructor(
        titleService: Title,
        public videoGamesDtService: VideoGamesDtService
    ) { 
        titleService.setTitle('Videojuegos');
    }

}
