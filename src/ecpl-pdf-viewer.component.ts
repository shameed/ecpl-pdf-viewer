import { Component, OnInit, Input, Renderer2, OnDestroy } from '@angular/core';

@Component({
  selector: 'ecpl-pdf-viewer',
  templateUrl: '/src/ecpl-pdf-viewer.component.html',
  styleUrls: ['../src/ecpl-pdf-viewer.component.css']
})
export class EcplPdfViewerComponent implements OnInit {
  @Input() id: string;
  @Input() pdfSrc: string;
  @Input() pdfName: string;
  showModalWindow: boolean;

  constructor(private renderer: Renderer2) {}

  showModal() {
    this.showModalWindow = true;
    this.renderer.addClass(document.body, 'modal-open');
  }

  hideModal() {
    this.showModalWindow = false;
    this.renderer.removeClass(document.body, 'modal-open');
  }

  ngOnInit() {}
}
