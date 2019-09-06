import { TestBed } from '@angular/core/testing';

import { EmergenciaCadastroService } from './emergencia-cadastro.service';

describe('EmergenciaCadastroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmergenciaCadastroService = TestBed.get(EmergenciaCadastroService);
    expect(service).toBeTruthy();
  });
});
