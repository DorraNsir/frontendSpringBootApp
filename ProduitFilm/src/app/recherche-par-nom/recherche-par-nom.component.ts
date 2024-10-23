import { Component } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Film } from '../model/film.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
})
export class RechercheParNomComponent {
  nomFilm! : string;
  films!:Film[];
  allFilms! : Film[];
  searchTerm: string = '';

  constructor(private filmService: FilmService) { }

  rechercherFilms(){
    this.filmService.rechercherParNom(this.nomFilm).
    subscribe(film => {
    this.films = film;
    console.log(film)});
    }
    

    ngOnInit(): void {
    this.filmService.listefilms().subscribe(film => {
    console.log(film);
    this.allFilms = film;
    });
    }
    onKeyUp(filterText: string): void {
      this.films = this.allFilms.filter(item =>
        item.nomFilm?.toLowerCase().includes(filterText.toLowerCase())
      );
    }


    
}
