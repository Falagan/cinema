import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'cinema-block-template',
  templateUrl: './block-template.component.html',
  styleUrls: ['./block-template.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlockTemplateComponent {
  @Input() text: string;
}
