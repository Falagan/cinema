import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRoutes, _Login } from '../../../api/api.index';
import { Login } from '../../front.index';

@Injectable({
  providedIn: 'root'
})
export class AuthRepository {
  constructor(private httpClient: HttpClient, @Inject('apiUrl') private apiUrl: string) {}
  /**
   * Fake login user
   * @param  {Login} credentials
   */
  public login(credentials: Login): Observable<_Login> {
    return this.httpClient.get<_Login>(`${this.apiUrl}${AuthRoutes.LOGIN}`);
  }
}
