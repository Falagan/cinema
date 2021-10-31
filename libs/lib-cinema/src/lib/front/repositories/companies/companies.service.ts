import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompaniesRoutes, _Company } from '../../../api/api.index';

@Injectable({
  providedIn: 'root'
})
export class CompaniesRepository{
  constructor(private httpClient: HttpClient, @Inject('apiUrl') private apiUrl: string) {}

  public findAll(): Observable<_Company[]> {
    return this.httpClient.get<_Company[]>(`${this.apiUrl}/${CompaniesRoutes.PRE}`);
  }
}
