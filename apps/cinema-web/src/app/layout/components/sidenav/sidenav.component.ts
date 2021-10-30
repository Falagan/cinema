import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '@cinema/lib-cinema';
import { Observable } from 'rxjs';
import { GlobalStateService } from '../../../common/global-state/global-state.service';
import { GlobalStateProps } from '../../../common/global-state/store/global-initial.state';

@Component({
  selector: 'cinema-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {
  @Output() closeSideMenu = new EventEmitter();
  public menu$: Observable<Menu>;

  constructor(private router: Router, private globalState: GlobalStateService) {
    this.binds();
  }

  // UTILS

  onNavigateTo(link: string) {
    this.router.navigate([link]);
  }

  onCloseSideMenu() {
    this.closeSideMenu.emit(false);
  }

  // BINDS

  private binds() {
    this.menu$ = this.globalState.bind$(GlobalStateProps.SIDE_MENU_ITEMS);
  }
}
