import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { AddFilmComponent } from './add-film/add-film.component';

const routes: Routes = [
  {path:"films",component:FilmsComponent},
  {path:"addFilm",component:AddFilmComponent},
  {path: "", redirectTo: "films", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
