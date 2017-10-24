import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcplPdfViewerComponent } from './ecpl-pdf-viewer.component';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [EcplPdfViewerComponent, PdfViewerComponent],
  imports: [CommonModule],
  exports: [EcplPdfViewerComponent]
})
export class EcplPdfViewerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: EcplPdfViewerModule
    };
  }
}
