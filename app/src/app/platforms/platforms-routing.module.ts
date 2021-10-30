// Librerías.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importaciones de platforms.
import { PlatformsComponent } from './components/platforms.component';

const routes: Routes = [
    {
        path: '',
        component: PlatformsComponent,
        data: { current: 'platforms' }
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

export class PlatformsRoutingModule { }
