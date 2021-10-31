import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActionButtonComponent } from './action-button/action-button.component';
import { BlockTemplateComponent } from './block-template/block-template.component';

@NgModule({
  declarations: [ActionButtonComponent, BlockTemplateComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [ActionButtonComponent, BlockTemplateComponent]
})
export class FrontModule {}
