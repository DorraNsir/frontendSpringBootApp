import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html'
})
export class FilmsComponent implements OnInit {
  films!:string[];
  constructor(){
    this.films = [
      "Inception",
      "The Dark Knight",
      "Interstellar",
      "Parasite",
      "The Matrix",
      "The Lord of the Rings",
      "Pulp Fiction",
      "The Godfather",
      "Forrest Gump",
      "Fight Club"
    ];
  }
  ngOnInit(): void {
      
  }



}
