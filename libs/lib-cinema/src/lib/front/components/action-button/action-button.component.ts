import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cinema-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css']
})
export class ActionButtonComponent {
  @Output() onClickAction = new EventEmitter();
  @Input() icon: string;

  public onClick() {
    this.onClickAction.emit(true);
  }
}
