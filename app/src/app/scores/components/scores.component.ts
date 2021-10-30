// Librerías.
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

// Importaciones de scores.
import { ScoresDtService } from '../services/scores.dt-service';

@Component({
    selector: 'app-scores',
    templateUrl: '../pages/scores.page.html'
})
export class ScoresComponent {

    constructor(
        titleService: Title,
        public scoresDtService: ScoresDtService
    ) { 
        titleService.setTitle('Puntuaciones');
    }

}
