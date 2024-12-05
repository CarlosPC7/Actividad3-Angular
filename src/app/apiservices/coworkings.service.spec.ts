import { TestBed } from '@angular/core/testing';
import { CoworkingsService } from './coworkings.service';

describe('CoworkingsService', () => {
  let service: CoworkingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoworkingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
