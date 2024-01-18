import { Injectable } from '@angular/core';
import { NgxIcon } from './ngx-icons';

@Injectable({
  providedIn: 'root'
})
export class NgxIconLibService {
  #registry = new Map<string, string>();

  public registerIcons(icons: NgxIcon[]): void {
    icons.forEach((icon: NgxIcon) => this.#registry.set(icon.name, icon.data));
  }
  public getIcon(icon: string): string | undefined {
    if (!this.#registry.has(icon)) {
      console.warn(
        `We could not find the icon with the name ${icon}, did you add it to the registry?`
      );
    }
    return this.#registry.get(icon);
  }
}
