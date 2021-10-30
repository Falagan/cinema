import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRepository, Login, _Login } from '@cinema/lib-cinema';
import { Action } from '@global/lib-store';
import { GlobalStateService } from '../global-state/global-state.service';
import { GlobalStateActions } from '../global-state/store/global.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private globalState: GlobalStateService,
    private authRepository: AuthRepository,
    private router: Router
  ) {}

  public async login(credentials: Login, navigateTo: string) {
    const login: _Login = await this.authRepository.login(credentials).toPromise();
    if (login) {
      const action: Action<GlobalStateActions> = {
        type: GlobalStateActions.SET_USER,
        payload: { name: login.name, avatar: login.avatar },
        singleProp: true
      };
      this.globalState.dispatchPropState(action);

      sessionStorage.setItem('fakeToken', login.fakeToken);

      this.router.navigate([navigateTo]);
    } else {
      this.router.navigate(['/']);
    }
  }
}
