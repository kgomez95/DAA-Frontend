// Librerías.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importaciones de scores.
import { ScoresComponent } from './components/scores.component';

const routes: Routes = [
    {
        path: '',
        component: ScoresComponent,
        data: { current: 'scores' }
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

export class ScoresRoutingModule { }
