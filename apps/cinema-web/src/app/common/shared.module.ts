import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FrontModule } from '@cinema/lib-cinema';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [FrontModule,TranslateModule]
})
export class SharedModule {}
