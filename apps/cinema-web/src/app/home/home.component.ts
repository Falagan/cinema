import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cinema-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  constructor(private router: Router){};

  login(credentials: { email: string; password: string }) {
    console.log(credentials);
    this.router.navigate(['/cinema/movies/list']);
  }
}
