import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FrontModule } from '@cinema/lib-cinema';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [FrontModule,TranslateModule]
})
export class SharedModule {}
