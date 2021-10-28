import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse, CommonRoutes, FindAllResponse, Movie, MovieResponse, MovieRoutes } from '@cinema/lib-cinema';
import { environment } from '@cinema/web/envs';
import { Observable } from 'rxjs';
import { DeleteResponse } from './../../../api/responses/common/delete.response';
import { DeleteMany } from './../../models/common/delete-many';

@Injectable({
  providedIn: 'root'
})
export class MoviesRepository {
  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  public findAll(): Observable<ApiResponse<FindAllResponse<MovieResponse>>> {
    return this.httpClient.get<ApiResponse<FindAllResponse<MovieResponse>>>(`${this.apiUrl}${MovieRoutes.PRE}`);
  }

  public create(newMovie: Movie): Observable<ApiResponse<MovieResponse>> {
    return this.httpClient.post<ApiResponse<MovieResponse>>(
      `${this.apiUrl}${MovieRoutes.PRE}${CommonRoutes.CREATE}`,
      newMovie
    );
  }

  public update(movieUid: string, updateMovie: Partial<Movie>): Observable<ApiResponse<MovieResponse>> {
    return this.httpClient.patch<ApiResponse<MovieResponse>>(
      `${this.apiUrl}${MovieRoutes.PRE}${CommonRoutes.UPDATE}/${movieUid}`,
      updateMovie
    );
  }

  public remove(movieUid: string): Observable<ApiResponse<DeleteResponse>> {
    return this.httpClient.delete<ApiResponse<DeleteResponse>>(`${this.apiUrl}${MovieRoutes.PRE}/${movieUid}`);
  }

  public removeMany(deleteMovies: DeleteMany): Observable<ApiResponse<DeleteResponse>> {
    return this.httpClient.post<ApiResponse<DeleteResponse>>(`${this.apiUrl}${MovieRoutes.PRE}`, deleteMovies);
  }
}
