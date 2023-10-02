import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonServiceService } from '../mon-service.service';

@Component({
  selector: 'comp-testo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      {{test}}
    </p>
    <div *ngIf="true">toto</div>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TestoComponent {

  test:string;

  constructor(service:MonServiceService) {

    this.test = service.test();

  }

}
