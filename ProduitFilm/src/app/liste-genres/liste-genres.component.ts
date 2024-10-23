import { Component } from '@angular/core';
import { Genre } from '../model/genre.model';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-liste-genres',
  templateUrl: './liste-genres.component.html',
})
export class ListeGenresComponent {

  ajout:boolean=true;
  genres! : Genre[];
  updatedGenre:Genre = {
    "idG": 0,
    "nomG": "",
    descriptionG: ''
  };

constructor(private filmService : FilmService) { }
ngOnInit(): void {
  this.filmService.listeGenres().
  subscribe(fil => {this.genres = fil._embedded.genreFilms;
  console.log(fil);
});
}

genreUpdated(g:Genre){
  console.log("genre updated event",g);
  this.filmService.ajouterGenre(g).
   subscribe( ()=> this.chargerGenres());
   this.ajout=false

  }
 
  chargerGenres(){
    this.filmService.listeGenres().
    subscribe(cats => {this.genres = cats._embedded.genreFilms;
    console.log(cats);
    });
    }
  


}
