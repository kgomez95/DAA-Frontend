// Librerías.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importaciones de videogames.
import { VideoGamesComponent } from './components/videogames.component';

const routes: Routes = [
    {
        path: '',
        component: VideoGamesComponent,
        data: { current: 'videogames' }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class VideoGamesRoutingModule { }
