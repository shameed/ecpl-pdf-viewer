import { Component, OnInit, Input, Renderer2, OnDestroy } from '@angular/core';

@Component({
  selector: 'ecpl-pdf-viewer',
  template: `
    <a href="javascript:void(0)" (click)="showModal()" id="pdf-file-{{id}}">
      <img src="/assets/icons/pdf.png" alt="Pdf File">
    </a>

    <div class="pdf-modal" *ngIf="showModalWindow" id="pdf-file-{{id}}">
      <div class="modal-dialog">
        <div class="modal-header">
            <img src="/assets/icons/pdf.png" alt="Pdf File" class="pdf-icon-header pull-left"> <h3 class="pull-left">{{pdfName}}</h3>     <button (click)="hideModal()" class="pull-right">x</button>
        </div>
        <div class="modal-body" id="pdf-pop-{{id}}">
            <pdf-viewer [src]="pdfSrc"
            [render-text]="true"
            style="display: block;"></pdf-viewer>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
    .pdf-modal{
      display: block;
      width:100%;
      height: 100%;
      position: fixed;
      left: 0;
      right: 0;
      top:0;
      bottom: 0;
      background: rgba(0, 0, 0, .5);
      z-index:10001;
      padding: 15px;
    }

    .modal-dialog{
      background-color: #fff;
      border: 1px solid #f2f2f2;
      margin-top: 0px;
      margin-bottom: 0px;
      width:100%;
      height: 100%;
    }

    .modal-header{
      height: 6%;
      padding: 5px;
    }

    h3 {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 16px;
      padding: 5px;
    }

    button.pull-right{
      padding: 0 12px;
      background: none;
      outline: none;
      border: none;
      font-size: 25px;
      position: absolute;
      top: 0;
      right: 0;
      border-left: 1px solid #dedede;
      color: #dedede;
    }

    .modal-body{
      width:100%;
      height: 94%;
      overflow: auto;
      padding: 5px;
      background: #dedede;
    }

    .pdf-icon-header{
      width:20px;
      height: auto;
    }

  `
  ]
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
