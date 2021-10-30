import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalStateProps } from '../../../common/global-state/store/global-initial.state';
import { GlobalStateService } from './../../../common/global-state/global-state.service';
import { AuthService } from './../../../common/services/auth.service';

@Component({
  selector: 'cinema-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {
  @Output() openSideMenu = new EventEmitter();
  public title$: Observable<string>;

  constructor(private globalState: GlobalStateService, private authService: AuthService) {
    this.binds();
  }

  // EVENTS

  public onOpenSideMenu() {
    this.openSideMenu.emit(true);
  }

  public onLogout() {
    this.authService.logout()
  }

  // BINDS

  private binds() {
    this.title$ = this.globalState.bind$(GlobalStateProps.TOOLBAR_TITLE);
  }
}
