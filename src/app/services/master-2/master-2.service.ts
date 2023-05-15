import { Injectable } from '@angular/core';
import { ValueService } from '../value/value.service';

@Injectable({
  providedIn: 'root'
})
export class Master2Service {

  constructor(
    private _valueService: ValueService
  ) { }

  getValue() {
    return this._valueService.value;
  }

  getValueFromFunction() {
    return this._valueService.getValue();
  }
}
