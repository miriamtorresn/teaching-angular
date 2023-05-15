import { ValueService } from './value.service';

describe('ValueService', () => {
  let service: ValueService;

  beforeEach(() => {
    service = new ValueService();
  });

  it('Should create service', () => {
    expect(service).toBeTruthy();
  });

  describe('Get and set value tests', () => {
    it('Should get value', () => {
      expect(service.value).toBe('myValue');
    });

    it('Should set value', () => {
      service.value = 'NewValue'
      expect(service.value).toBe('NewValue');
    });
  });

  describe('Get value async tests', () => {
    it('Should get value from promise - then', (doneFc) => {
      service.getPromiseValue().then(val => {
        expect(val).toBe('myValue');
        doneFc();
      })
    });

    it('Should get value from promise - await', async () => {
      const value = await service.getPromiseValue();
      expect(value).toBe('myValue');
    });

    it('Should get value from promise - observable', () => {
      service.getObservableValue().subscribe(val => {
        expect(val).toBe('myValue');
      });
    });
  });
  
});
