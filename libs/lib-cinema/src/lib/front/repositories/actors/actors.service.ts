import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ActorsRoutes, _Actor } from '@cinema/lib-cinema';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorsRepoitory {
  constructor(private httpClient: HttpClient, @Inject('apiUrl') private apiUrl: string) {}

  public findAll(): Observable<_Actor[]> {
    return this.httpClient.get<_Actor[]>(`${this.apiUrl}/${ActorsRoutes.PRE}`);
  }
}
