import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationsRoutes, _Menu } from '../../../api/api.index';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationsRepositoryService {

  constructor(private httpClient: HttpClient,@Inject('apiUrl') private apiUrl: string) {}

  public getAsideMenu(): Observable<_Menu> {
    return this.httpClient.get<_Menu>(`${this.apiUrl}${ConfigurationsRoutes.SIDE_MENU}`);
  }
}
