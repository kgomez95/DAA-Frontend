// Librerías.
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Importaciones de home.
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home.component';

// Importaciones de shared.
import { DataTablesModule } from '@shared/datatables/datatables.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HomeRoutingModule,
        DataTablesModule
    ],
    declarations: [
        HomeComponent
    ]
})

export class HomeModule { }
