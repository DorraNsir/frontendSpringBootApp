import { Component, OnInit } from '@angular/core';
import { Film } from '../model/film.model';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html'
})
export class FilmsComponent implements OnInit {
  films?:Film[];
  constructor() {
    this.films = [ 
      {idFilm : 1, nomFilm : "Inception", prixFilm : 15.50, dateCreation : new Date("07/16/2010")},
      {idFilm : 2, nomFilm : "Interstellar", prixFilm : 18.00, dateCreation : new Date("11/07/2014")},
      {idFilm : 3, nomFilm : "The Matrix", prixFilm : 12.75, dateCreation : new Date("03/31/1999")}
    ];
  }
  
  ngOnInit(): void {
      
  }



}
