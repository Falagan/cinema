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
  /**
   * Fake login user
   * @param  {Login} credentials
   */
  public login(credentials: Login): Observable<_Login> {
    return this.httpClient.get<_Login>(`${this.apiUrl}${AuthRoutes.LOGIN}`);
  }
}
