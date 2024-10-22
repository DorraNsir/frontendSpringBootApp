import { Genre } from "./genre.model";

export class Film {
    idFilm! : number;
    nomFilm!: string;
    prixFilm! : number;
     dateCreation! : Date ;
     genreFilm!:Genre;
    }