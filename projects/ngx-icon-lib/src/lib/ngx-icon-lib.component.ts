import { CommonModule, DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  inject
} from '@angular/core';
import { NgxIconLibService } from './ngx-icon-lib.service';

@Component({
  selector: 'ngx-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-content></ng-content>
  `,
  styles: [':host::ng-deep svg{width: 24px; height:24px;}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxIconLibComponent {
  #element: ElementRef = inject(ElementRef);
  #iconRegistry: NgxIconLibService = inject(NgxIconLibService);
  #document: Document | any = inject(DOCUMENT, { optional: true });
  #svgIcon!: SVGElement;

  @Input()
  set name(name: string) {
    if (this.#svgIcon) {
      this.#element.nativeElement.removeChild(this.#svgIcon);
    }
    const svgData = this.#iconRegistry.getIcon(name);
    this.#svgIcon = this.#svgElementFromString(svgData);
    this.#element.nativeElement.appendChild(this.#svgIcon);
  }

  #svgElementFromString(svgContent: string | undefined): SVGElement {
    const div = this.#document.createElement('DIV');
    div.innerHTML = svgContent;
    return (
      div.querySelector('svg') ||
      this.#document.createElementNS('http://www.w3.org/2000/svg', 'path')
    );
  }
}
