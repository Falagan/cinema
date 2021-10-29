import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse, AuthRoutes, Login, _Login } from '@cinema/lib-cinema';
import { environment } from '@cinema/web/envs';
import { Observable } from 'rxjs';

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
