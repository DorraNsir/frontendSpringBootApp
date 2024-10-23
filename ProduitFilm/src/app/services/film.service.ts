import { Injectable } from '@angular/core';
import { Film } from '../model/film.model';
import { Genre } from '../model/genre.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { genreWrapped } from '../model/genreWrapped';
const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  apiURL: string = 'http://localhost:8080/produits/api';
  apiURLGen: string = 'http://localhost:8080/produits/gen';

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

  
  listeGenres(): Observable<genreWrapped> {
    return this.http.get<genreWrapped>(this.apiURLGen);
  }

  consulterFilm(id: number): Observable<Film> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Film>(url);
    }
  rechercherParGenre(idG: number):Observable< Film[]> {
    const url = `${this.apiURL}/genre/${idG}`  ;
    return this.http.get<Film[]>(url);
  }
  rechercherParNom(nom: string):Observable< Film[]> {
    const url = `${this.apiURL}/filmByName/${nom}`;
    return this.http.get<Film[]>(url);
    }
    ajouterGenre( g: Genre):Observable<Genre>{
      return this.http.post<Genre>(this.apiURLGen, g, httpOptions);}

      updateGenre( g: Genre):Observable<Genre>{
        const url = `${this.apiURL}/${g.idG}`;
        return this.http.put<Genre>(url,g);}
    





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
