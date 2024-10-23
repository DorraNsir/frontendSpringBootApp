  import { Component, OnInit } from '@angular/core';
  import { Film } from '../model/film.model';
  import { clippingParents } from '@popperjs/core';
  import { FilmService } from '../services/film.service';
  import { Genre } from '../model/genre.model';
  import { Router } from '@angular/router';

  @Component({
    selector: 'app-add-film',
    templateUrl: './add-film.component.html'
  })
  export class AddFilmComponent implements OnInit {
    genreFilms! : Genre[];
    newIdG! : number;
    newGenre! : Genre;
    newFilm=new Film();
    message?:string;
    constructor(private filmService: FilmService,private router :Router ) {
      
      }

    ngOnInit(): void {
      this.filmService.listeGenres().subscribe(response => {
        this.genreFilms = response._embedded.genreFilms;  // Access genres inside _embedded
      });
      }
        
    addFilm(){
        this.newFilm.genreFilm = this.genreFilms.find(g => g.idG == this.newIdG)!;
        this.filmService.ajouterfilm(this.newFilm)
        .subscribe(prod => {
        console.log(prod);
        this.router.navigate(['films']);
        });
      }


      

  }
