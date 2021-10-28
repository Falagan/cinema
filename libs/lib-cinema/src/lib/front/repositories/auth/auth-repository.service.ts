import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse, AuthRoutes, Login, LoginResponse } from '@cinema/lib-cinema';
import { environment } from '@cinema/web/envs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthRepository {
  private apiUrl: string = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  public login(credentials: Login): Observable<ApiResponse<LoginResponse>> {
    return this.httpClient.post<ApiResponse<LoginResponse>>(`${this.apiUrl}${AuthRoutes.PRE}${AuthRoutes.LOGIN}`, credentials);
  }
}
