export class ValueTestingService {
  private _value = 'myTestingValue';

  constructor() { }

  get value(): string {
    return this._value;
  }

  set value(newValue: string) {
    this._value = newValue;
  }

  getPromiseValue() {
    return Promise.resolve(this._value);
  }
}
