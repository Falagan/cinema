import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@cinema/web/envs';
import { Observable } from 'rxjs';
import { AuthRoutes, _Login } from '../../../api/api.index';
import { Login } from '../../front.index';

@Injectable({
  providedIn: 'root'
})
export class AuthRepository {
  private apiUrl: string = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  public login(credentials: Login): Observable<_Login> {
    return this.httpClient.post<_Login>(`${this.apiUrl}${AuthRoutes.LOGIN}`, credentials);
  }
}
