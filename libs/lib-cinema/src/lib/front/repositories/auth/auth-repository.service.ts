import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse, AuthRoutes, Login, LoginResponse } from '@cinema/lib-cinema';
import { Observable } from 'rxjs';
import { environment } from './../../../../../../../apps/cinema-web/src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthRepository {
  private apiUrl: string = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  public login(credentials: Login): Observable<ApiResponse<LoginResponse>> {
    return this.httpClient.post<ApiResponse<LoginResponse>>(`${AuthRoutes.PRE}${AuthRoutes.LOGIN}`, credentials);
  }
}
