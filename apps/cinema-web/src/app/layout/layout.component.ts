import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalStateService } from '../common/global-state/global-state.service';
import { GlobalStateProps } from '../common/global-state/store/global-initial.state';

@Component({
  selector: 'cinema-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  @ViewChild('drawer') drawer: any;
  public sideMenuOpen$: Observable<boolean>;

  constructor(private globalState: GlobalStateService) {
    this.binds()
  }

  // UTILS

  onToggleSideMenu(state:boolean) {
    this.globalState.setSideMenuOpenState(state);
  }

  // BINDS

  binds() {
    this.sideMenuOpen$ = this.globalState.bind$(GlobalStateProps.SIDE_MENU_OPEN_STATE);
  }
}
