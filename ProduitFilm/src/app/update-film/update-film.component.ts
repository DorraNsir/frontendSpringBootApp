import { FilmService } from './../services/film.service';
import { Component } from '@angular/core';
import { Film } from '../model/film.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-update-film',
  templateUrl: './update-film.component.html'
})
export class UpdateFilmComponent {
  currentFilm = new Film();
  genres! : Genre[];
updatedGId! : number;
constructor(private activatedRoute: ActivatedRoute,
private filmService: FilmService,private router :Router) { }


  ngOnInit(): void {
    this.filmService.listeGenres().
    subscribe(gen => {this.genres = gen;
    console.log(gen);
    });
    this.filmService.consulterFilm(this.activatedRoute.snapshot.params['id']).
    subscribe( prod =>{ this.currentFilm = prod;
    this.updatedGId =this.currentFilm.genreFilm.idG;
    } ) ;
    }

  updateFilm() {
    this.currentFilm.genreFilm = this.genres.
     find(gen => gen.idG == this.updatedGId)!;
    this.filmService.updateFilm(this.currentFilm).subscribe(prod => {
    this.router.navigate(['films']); }
    );
    }
  

}
