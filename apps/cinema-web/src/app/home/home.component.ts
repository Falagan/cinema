import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Login } from '@cinema/lib-cinema';
import { AuthService } from './../common/services/auth.service';

@Component({
  selector: 'cinema-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  constructor(private authService: AuthService) {}

  login(credentials: Login) {
    this.authService.login(credentials, '/cinema/movies/list');
  }
}
