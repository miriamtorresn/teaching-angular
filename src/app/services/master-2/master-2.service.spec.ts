import { TestBed } from '@angular/core/testing';

import { Master2Service } from './master-2.service';
import { ValueService } from '../value/value.service';

// Using test bed
describe('Master2Service', () => {
  let service: Master2Service;
  let valueServiceSpy: jasmine.SpyObj<ValueService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ValueService', ['getValue']);

    TestBed.configureTestingModule({
      providers: [ {
        provide: ValueService, useValue: spy
      } ]
    });
    service = TestBed.inject(Master2Service);
    valueServiceSpy = TestBed.inject(ValueService) as jasmine.SpyObj<ValueService>;
    valueServiceSpy.getValue.and.returnValue('SpyTestingValue');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Example of creating an spy
  it('should call getValue within service.getValue()', () => {
    expect(service.getValueFromFunction()).toBe('SpyTestingValue');
    expect(valueServiceSpy.getValue).toHaveBeenCalled();
    expect(valueServiceSpy.getValue).toHaveBeenCalledTimes(1);
  });
});
