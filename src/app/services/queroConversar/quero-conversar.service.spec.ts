import { TestBed } from '@angular/core/testing';

import { QueroConversarService } from './quero-conversar.service';

describe('QueroConversarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QueroConversarService = TestBed.get(QueroConversarService);
    expect(service).toBeTruthy();
  });
});
