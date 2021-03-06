// Librerías.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importaciones de app.
import { AppComponent } from '@app/app.component';

// Importaciones de core.
import { DefaultLayoutComponent } from '@core/layouts/default/default-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'home',
        component: DefaultLayoutComponent,
        loadChildren: () => import('@app/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'scores',
        component: DefaultLayoutComponent,
        loadChildren: () => import('@app/scores/scores.module').then(m => m.ScoresModule)
      },
      {
        path: 'videogames',
        component: DefaultLayoutComponent,
        loadChildren: () => import('@app/videogames/videogames.module').then(m => m.VideoGamesModule)
      },
      {
        path: 'platforms',
        component: DefaultLayoutComponent,
        loadChildren: () => import('@app/platforms/platforms.module').then(m => m.PlatformsModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
