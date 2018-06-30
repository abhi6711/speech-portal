/**
 * Subscriber service is used to change the tab slider.
 */

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class Subscriber {
  private change = new Subject<any>();

  changeTab$ = this.change.asObservable();

  /**
   * function which will be storing the parameter when this subject observable is called
   * @param  {number} tab
   * @returns void
   */
  storeValueInObservable(tab: number): void {
    this.change.next(tab);
  }
}