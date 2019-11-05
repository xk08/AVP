import { TestBed } from '@angular/core/testing';

import { ProfissionalConteudoEspecificoService } from './profissional-conteudo-especifico.service';

describe('ProfissionalConteudoEspecificoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfissionalConteudoEspecificoService = TestBed.get(ProfissionalConteudoEspecificoService);
    expect(service).toBeTruthy();
  });
});
