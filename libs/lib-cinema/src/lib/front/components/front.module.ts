import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActionButtonComponent } from './action-button/action-button.component';
import { BlockTemplateComponent } from './block-template/block-template.component';

@NgModule({
  declarations: [ActionButtonComponent, BlockTemplateComponent],
  imports: [CommonModule, MatIconModule],
  exports:[ActionButtonComponent, BlockTemplateComponent]
})
export class FrontModule {}
