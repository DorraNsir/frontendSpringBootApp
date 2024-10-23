import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Genre } from '../model/genre.model';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-update-genre',
  templateUrl: './update-genre.component.html',
})
export class UpdateGenreComponent {
  @Input()
  genre!: Genre;
  @Output()
  genreUpdated = new EventEmitter<Genre>();
  @Input()
  ajout!:boolean;


  constructor(private filmService: FilmService){}


  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateGenre ",this.genre);}
  
        saveGenre() {
          if (this.ajout) {
            this.filmService.ajouterGenre(this.genre).subscribe(
              (response) => {
                this.genreUpdated.emit(response);
                console.log('Exposition ajoutée avec succès : ', response);
              },
              (error) => {
                console.error("Erreur lors de l'ajout de l'exposition : ", error);
              }
            );
          } else {
            this.filmService.updateGenre(this.genre).subscribe(
              (response) => {
                this.genreUpdated.emit(response);
                console.log('Exposition modifiée avec succès : ', response);
              },
              (error) => {
                console.error("Erreur lors de la modification de l'exposition : ", error);
              }
            );
          }
        }
    

}
