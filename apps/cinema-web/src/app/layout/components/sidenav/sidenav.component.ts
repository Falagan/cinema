import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalStateService } from '../../../common/global-state/global-state.service';
import { Menu } from '@cinema/lib-cinema';
import { GlobalStateProps } from '../../../common/global-state/store/global-initial.state';

@Component({
  selector: 'cinema-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Output() closeSideMenu = new EventEmitter();
  public menu$: Observable<Menu>;
  public loading$ =  false;

  constructor(private router: Router, private globalState: GlobalStateService) {}

  // HOOKS

  ngOnInit(): void {
    this.binds();
  }

  // UTILS

  onNavigateTo(link: string) {
    this.router.navigate([link]);
  }

  onCloseSideMenu() {
    this.closeSideMenu.emit(true);
  }
  // BINDS

  private binds() {
    this.menu$ = this.globalState.bind$(GlobalStateProps.SIDE_MENU_ITEMS);
    this.menu$.subscribe((test)=>{
      console.log('asdasd',test)
    })
  }
}
