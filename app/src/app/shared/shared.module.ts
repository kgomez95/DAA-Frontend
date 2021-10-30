// Librerías.
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Importaciones de shared.
import { DataTablesModule } from '@shared/datatables/datatables.module';
import { NavbarModule } from '@shared/navbar/navbar.module';

@NgModule({
    imports: [
        RouterModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        DataTablesModule,
        NavbarModule
    ],
    exports: [
        DataTablesModule,
        NavbarModule
    ]
})
export class SharedModule { }
