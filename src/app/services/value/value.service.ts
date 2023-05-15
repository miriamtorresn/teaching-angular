import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueService {
  private _value = 'myValue';

  constructor() { }

  get value(): string {
    return this._value;
  }

  // added just for spy testing purposes
  getValue(): string {
    return this._value;
  }

  set value(newValue: string) {
    this._value = newValue;
  }

  getPromiseValue() {
    return Promise.resolve(this._value);
  }

  getObservableValue() {
    return of(this._value);
  }
}
