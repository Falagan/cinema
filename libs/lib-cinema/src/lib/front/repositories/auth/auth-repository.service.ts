import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@cinema/web/envs';
import { ApiResponse, AuthRoutes, _Login } from '../../../api/api.index';
import { Login } from '../../front.index';

@Injectable({
  providedIn: 'root'
})
export class AuthRepository {
  private apiUrl: string = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  public login(credentials: Login): Observable<ApiResponse<_Login>> {
    return this.httpClient.post<ApiResponse<_Login>>(`${this.apiUrl}${AuthRoutes.PRE}${AuthRoutes.LOGIN}`, credentials);
  }
}
