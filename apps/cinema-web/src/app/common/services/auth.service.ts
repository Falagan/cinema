import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRepository, Login, _Login } from '@cinema/lib-cinema';
import { Action } from '@global/lib-store';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { GlobalStateService } from '../global-state/global-state.service';
import { GlobalStateActions } from '../global-state/store/global.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  @BlockUI() blockUI: NgBlockUI;

  constructor(
    private globalState: GlobalStateService,
    private authRepository: AuthRepository,
    private router: Router
  ) {}

  public async login(credentials: Login, navigateTo: string) {
    const login: _Login = await this.authRepository.login(credentials).toPromise();
    if (login.fakeToken) {
      const action: Action<GlobalStateActions> = {
        type: GlobalStateActions.SET_USER,
        payload: { name: login.name, avatar: login.avatar },
        singleProp: true
      };
      this.globalState.dispatchPropState(action);
      this.saveSession(login);
      this.router.navigate([navigateTo]);
    } else {
      this.router.navigate(['/']);
    }
    this.blockUI.stop();
  }

  public async logout() {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

  /**
   * Saves user session data on session storageo
   * @param  {_Login} login
   */
  private saveSession(login: _Login) {
    sessionStorage.setItem('fakeToken', login.fakeToken);
    sessionStorage.setItem('userName', login.name);
    sessionStorage.setItem('avatar', login.avatar);
  }
}
