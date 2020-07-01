import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SeriesComponent } from './series/series.component';
import { MoviesComponent } from './movies/movies.component';


const routes: Routes = [
  { path: '', redirectTo: 'header', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'movies', component: MoviesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
