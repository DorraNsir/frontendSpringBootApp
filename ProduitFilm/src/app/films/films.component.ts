import { FilmService } from './../services/film.service';
import { Component, OnInit } from '@angular/core';
import { Film } from '../model/film.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html'
})
export class FilmsComponent implements OnInit {
  films!:Film[];
  constructor(private filmService: FilmService ,public authService: AuthService) {
    
    }
    
  ngOnInit(): void {
    this.chargerFilms();
    }
    chargerFilms(){
    this.filmService.listefilms().subscribe(f => {
    console.log(f);
    this.films = f;
    });
    }
    deleteFilm(film:Film){
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
        this.filmService.supprimerFilm(film.idFilm).subscribe(() => {
        console.log("produit supprimé");
        this.chargerFilms();
        });
    }






}
