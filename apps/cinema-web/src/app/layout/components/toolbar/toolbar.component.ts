import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalStateProps } from '../../../common/global-state/store/global-initial.state';
import { GlobalStateService } from './../../../common/global-state/global-state.service';

@Component({
  selector: 'cinema-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {
  @Output() openSideMenu = new EventEmitter();
  public title$: Observable<string>;

  constructor(private globalState: GlobalStateService) {
    this.binds();
  }

  // UTILS

  public onOpenSideMenu() {
    this.openSideMenu.emit(true);
  }

  // BINDS

  private binds() {
    this.title$ = this.globalState.bind$(GlobalStateProps.TOOLBAR_TITLE);
  }
}
