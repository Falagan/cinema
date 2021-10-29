import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse, ConfigurationsRoutes, _Menu } from '@cinema/lib-cinema';
import { environment } from '@cinema/web/envs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationsRepositoryService {
  private apiUrl: string = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  public getAsideMenu(): Observable<ApiResponse<_Menu>> {
    return this.httpClient.get<ApiResponse<_Menu>>(
      `${this.apiUrl}${ConfigurationsRoutes.PRE}${ConfigurationsRoutes.SIDE_MENU}`
    );
  }
}
