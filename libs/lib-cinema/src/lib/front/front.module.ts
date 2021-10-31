import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { BlockTemplateComponent } from './components/block-template/block-template.component';
import { TimingMoviePipe } from './pipes/timing-movie.pipe';

@NgModule({
  declarations: [ActionButtonComponent, BlockTemplateComponent, TimingMoviePipe],
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [ActionButtonComponent, BlockTemplateComponent, TimingMoviePipe]
})
export class FrontModule {}
