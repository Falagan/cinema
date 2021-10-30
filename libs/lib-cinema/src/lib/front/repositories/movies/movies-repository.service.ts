import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonRoutes, MovieRoutes, _Movie } from '../../../api/api.index';
import { Movie } from '../../front.index';
import { DeleteResponse } from './../../../api/responses/common/delete.response';

@Injectable({
  providedIn: 'root'
})
export class MoviesRepository {
  constructor(private httpClient: HttpClient, @Inject('apiUrl') private apiUrl: string) {}

  public findAll(): Observable<_Movie[]> {
    return this.httpClient.get<_Movie[]>(`${this.apiUrl}/${MovieRoutes.PRE}`);
  }

  public create(newMovie: Movie): Observable<_Movie> {
    return this.httpClient.post<_Movie>(`${this.apiUrl}${MovieRoutes.PRE}${CommonRoutes.CREATE}`, newMovie);
  }

  public update(movieUid: string, updateMovie: Partial<Movie>): Observable<_Movie> {
    return this.httpClient.patch<_Movie>(
      `${this.apiUrl}${MovieRoutes.PRE}${CommonRoutes.UPDATE}/${movieUid}`,
      updateMovie
    );
  }

  public remove(movieUid: string): Observable<DeleteResponse> {
    return this.httpClient.delete<DeleteResponse>(`${this.apiUrl}${MovieRoutes.PRE}/${movieUid}`);
  }

  public removeMany(deleteMovies: string[]): Observable<DeleteResponse> {
    return this.httpClient.post<DeleteResponse>(`${this.apiUrl}${MovieRoutes.PRE}`, deleteMovies);
  }
}
