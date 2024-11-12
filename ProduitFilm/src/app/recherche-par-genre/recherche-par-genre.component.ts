import { Component } from '@angular/core';
import { Film } from '../model/film.model';
import { Genre } from '../model/genre.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-recherche-par-genre',
  templateUrl: './recherche-par-genre.component.html',
})
export class RechercheParGenreComponent  {
  films! : Film[];
  IdGenre! : number;
  genres! : Genre[];

  constructor(private activatedRoute: ActivatedRoute,
    private filmService: FilmService,private router :Router) { }

  ngOnInit(): void {
    this.filmService.listeGenres().
    subscribe(gen => {this.genres = gen._embedded.genreFilms;
    console.log(gen);
    });
  }

  onChange() {
    this.filmService.rechercherParGere(this.IdGenre).
    subscribe(fil =>{this.films=fil;console.log("liste de film par genre",fil)});
    
    }
    
    

}
