
import { MasterService } from './master.service';
import { ValueTestingService } from '../value/valueTesting.service';
import { ValueService } from '../value/value.service';

describe('MasterService', () => {
  let service: MasterService;

  // You can declare before each instead of declaring on each it
  // beforeEach(() => {
  //   const valueTestingService = new ValueTestingService();
  //   service = new MasterService(valueTestingService as unknown as ValueService);
  // });

  // Example from mocked service
  it('should return value from fake service', () => {
    const valueTestingService = new ValueTestingService();
    service = new MasterService(valueTestingService as unknown as ValueService);
    expect(service.getValue()).toBe('myTestingValue');
  });

  // Example of creating service from object
  it('should return value from fake service object', () => {
    const valueTestingService = {
      value: 'myTestingValue'
    };
    service = new MasterService(valueTestingService as ValueService);
    expect(service.getValue()).toBe('myTestingValue');
  });

  // Example of creating an spy
  it('should call getValue within service.getValue()', () => {
    const valueTestingService = jasmine.createSpyObj('ValueService', ['getValue']);
    valueTestingService.getValue.and.returnValue('SpyTestingValue');
    service = new MasterService(valueTestingService);
    expect(service.getValueFromFunction()).toBe('SpyTestingValue');
    expect(valueTestingService.getValue).toHaveBeenCalled();
    expect(valueTestingService.getValue).toHaveBeenCalledTimes(1);
  });
});
