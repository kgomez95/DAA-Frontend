// Librerías.
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Importaciones de platforms.
import { PlatformsRoutingModule } from './platforms-routing.module';
import { PlatformsComponent } from './components/platforms.component';
import { PlatformsDtService } from './services/platforms.dt-service';

// Importaciones de shared.
import { DataTablesModule } from '@shared/datatables/datatables.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PlatformsRoutingModule,
        DataTablesModule
    ],
    declarations: [
        PlatformsComponent
    ],
    providers: [
        PlatformsDtService
    ]
})

export class PlatformsModule { }
