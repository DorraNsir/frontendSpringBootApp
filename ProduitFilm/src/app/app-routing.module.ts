import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { AddFilmComponent } from './add-film/add-film.component';
import { UpdateFilmComponent } from './update-film/update-film.component';

const routes: Routes = [
  {path:"films",component:FilmsComponent},
  {path:"addFilm",component:AddFilmComponent},
  {path: "", redirectTo: "films", pathMatch: "full" },
  {path: "updatefilm/:id", component: UpdateFilmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
