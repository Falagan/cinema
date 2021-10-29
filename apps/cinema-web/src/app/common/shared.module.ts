import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlockTemplateComponent } from '@cinema/lib-cinema';

@NgModule({
  declarations: [BlockTemplateComponent],
  imports: [CommonModule],
  exports: [BlockTemplateComponent]
})
export class SharedModule {}
