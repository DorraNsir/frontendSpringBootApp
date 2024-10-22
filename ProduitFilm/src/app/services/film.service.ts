import { Injectable } from '@angular/core';
import { Film } from '../model/film.model';
import { Genre } from '../model/genre.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  apiURL: string = 'http://localhost:8080/produits/api';
  films: Film[] = [];
  genres!: Genre[];



  constructor(private http : HttpClient) {
  }
  listefilms(): Observable<Film[]>{
    return this.http.get<Film[]>(this.apiURL);
    }
    
  ajouterfilm( film: Film):Observable<Film>{
    this.films.push(film);
    return this.http.post<Film>(this.apiURL, film, httpOptions);
  }

  supprimerFilm(id : number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
    }

  updateFilm(film :Film) : Observable<Film>{
    return this.http.put<Film>(this.apiURL, film, httpOptions);
    }

  listeGenres():Observable<Genre[]>{
    return this.http.get<Genre[]>(this.apiURL+"/gen");
    }

  consulterFilm(id: number): Observable<Film> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Film>(url);
    }

        // trierFilm(){
        //   this.films = this.films.sort((n1,n2) => {
        //   if (n1.idFilm! > n2.idFilm!) {
        //   return 1;
        //   }
        //   if (n1.idFilm! < n2.idFilm!) {
        //   return -1;
        //   }
        //   return 0;
        //   });
        //   }


  
  
            
          consulterGenre(id:number): Genre{
            return this.genres.find(g => g.idG == id)!;
            }
          

      

}
