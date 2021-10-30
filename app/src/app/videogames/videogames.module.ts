// Librerías.
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Importaciones de videogames.
import { VideoGamesRoutingModule } from './videogames-routing.module';
import { VideoGamesComponent } from './components/videogames.component';
import { VideoGamesDtService } from './services/videogames.dt-service';

// Importaciones de shared.
import { DataTablesModule } from '@shared/datatables/datatables.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        VideoGamesRoutingModule,
        DataTablesModule
    ],
    declarations: [
        VideoGamesComponent
    ],
    providers: [
        VideoGamesDtService
    ]
})

export class VideoGamesModule { }
