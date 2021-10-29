import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalStateService } from '../common/global-state/global-state.service';
import { GlobalStateProps } from '../common/global-state/store/global-initial.state';

@Component({
  selector: 'cinema-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  @ViewChild('drawer') drawer: any;
  public sideMenuOpen$: Observable<boolean>;

  constructor(private globalState: GlobalStateService) {}

  //HOOKS

  ngOnInit(): void {
    this.bindGlobalState();
  }

  // UTILS

  onToggleSideMenu() {
    this.globalState.setSideMenuOpenState(false);
  }

  // BINDS

  bindGlobalState() {
    this.sideMenuOpen$ = this.globalState.bind$(GlobalStateProps.SIDE_MENU_OPEN_STATE);
  }
}
