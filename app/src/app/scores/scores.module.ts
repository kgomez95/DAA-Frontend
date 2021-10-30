// Librerías.
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Importaciones de scores.
import { ScoresRoutingModule } from './scores-routing.module';
import { ScoresComponent } from './components/scores.component';
import { ScoresDtService } from './services/scores.dt-service';

// Importaciones de shared.
import { DataTablesModule } from '@shared/datatables/datatables.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ScoresRoutingModule,
        DataTablesModule
    ],
    declarations: [
        ScoresComponent
    ],
    providers: [
        ScoresDtService
    ]
})

export class ScoresModule { }
