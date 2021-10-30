import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlockTemplateComponent } from '@cinema/lib-cinema';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [BlockTemplateComponent],
  imports: [CommonModule],
  exports: [BlockTemplateComponent,TranslateModule]
})
export class SharedModule {}
