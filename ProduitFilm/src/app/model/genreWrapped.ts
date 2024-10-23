
import { Genre } from './genre.model';
export class genreWrapped{
    _embedded!: { genreFilms: Genre[]};
    
}
