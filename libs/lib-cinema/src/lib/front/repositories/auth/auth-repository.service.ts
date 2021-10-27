import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse, AuthRoutes, Login, LoginResponse } from '@cinema/lib-cinema';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthRepository {
  constructor(private httpClient: HttpClient) {}

  public login(credentials: Login): Observable<ApiResponse<LoginResponse>> {
    return this.httpClient.post<ApiResponse<LoginResponse>>(`${AuthRoutes.PRE}${AuthRoutes.LOGIN}`, credentials);
  }
}
