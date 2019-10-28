import { TestBed } from '@angular/core/testing';

import { ProfissionalConteudoTextoService } from './profissional-conteudo-texto.service';

describe('ProfissionalConteudoTextoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfissionalConteudoTextoService = TestBed.get(ProfissionalConteudoTextoService);
    expect(service).toBeTruthy();
  });
});
