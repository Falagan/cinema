import { Component } from '@angular/core';

@Component({
  selector: 'cinema-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cinema-web';
}
