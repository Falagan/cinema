import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { AuthService } from './../common/services/auth.service';

@Component({
  selector: 'cinema-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  @BlockUI() blockUI: NgBlockUI;
  constructor(private authService: AuthService) {}

  login(credentials: any) {
    this.blockUI.start();
    this.authService.login(credentials, '/cinema/movies/list');
  }
}
