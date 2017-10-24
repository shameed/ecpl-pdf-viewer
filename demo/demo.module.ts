import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EcplPdfViewerModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, EcplPdfViewerModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}
