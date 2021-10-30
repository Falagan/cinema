import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cinema-root',
  template: `<block-ui>
    <router-outlet></router-outlet>
    <notifier-container></notifier-container>
    </block-ui>`,
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'cinema-web';
}
