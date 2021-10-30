import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@cinema/web/envs';
import { Observable } from 'rxjs';
import { ConfigurationsRoutes, _Menu } from '../../../api/api.index';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationsRepositoryService {
  private apiUrl: string = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  public getAsideMenu(): Observable<_Menu> {
    return this.httpClient.get<_Menu>(`${this.apiUrl}${ConfigurationsRoutes.SIDE_MENU}`);
  }
}
