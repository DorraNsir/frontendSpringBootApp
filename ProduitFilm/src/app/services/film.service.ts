import { AuthService } from './auth.service';
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
  

  constructor(private http : HttpClient,private authService: AuthService) {
  }
  listefilms(): Observable<Film[]>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Film[]>(this.apiURL+"/all",{headers:httpHeaders});
    }
    
    ajouterFilm( prod: Film):Observable<Film>{
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.post<Film>(this.apiURL+"/addFilm", prod, {headers:httpHeaders});
      }
      supprimerFilm(id : number) {
      const url = `${this.apiURL}/delFilm/${id}`;
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.delete(url, {headers:httpHeaders});
      }
      consulterFilm(id: number): Observable<Film> {
      const url = `${this.apiURL}/getbyid/${id}`;
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.get<Film>(url,{headers:httpHeaders});
      }
      updateFilm(prod :Film) : Observable<Film> {
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.put<Film>(this.apiURL+"/updateFilm", prod, {headers:httpHeaders});
      }
      listeGenres():Observable<genreWrapped>{
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt})
        return this.http.get<genreWrapped>(this.apiURLGen,{headers:httpHeaders}
        );
        }
        rechercherParGere(idG: number): Observable<Film[]> {
          const url = `${this.apiURL}/genre/${idG}`;
          const headers = new HttpHeaders({
            'Authorization': 'Bearer ' + this.authService.getToken() // Replace with the actual method to get token
          });
          return this.http.get<Film[]>(url, { headers });
        }

        rechercherParNom(nom: string):Observable< Film[]> {
        const url = `${this.apiURL}/filmByName/${nom}`;
        return this.http.get<Film[]>(url);
        }
        ajouterGenre( g: Genre):Observable<Genre>{
          let jwt = this.authService.getToken();
          jwt = "Bearer "+jwt;
          let httpHeaders = new HttpHeaders({"Authorization":jwt})
        return this.http.post<Genre>(this.apiURLGen, g,  {headers:httpHeaders});
        }

        updateGenre(g:Genre) : Observable<Genre>{
          let jwt = this.authService.getToken();
          jwt = "Bearer "+jwt;
          let httpHeaders = new HttpHeaders({"Authorization":jwt})
          const url = `${this.apiURLGen}/${g.idG}`;
          return this.http.put<Genre>(url, g, {headers:httpHeaders});
        }

     
      

}
