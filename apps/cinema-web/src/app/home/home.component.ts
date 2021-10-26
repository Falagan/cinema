import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cinema-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {

  login(credentials: { email: string; password: string }) {
    console.log(credentials);
  }
}
