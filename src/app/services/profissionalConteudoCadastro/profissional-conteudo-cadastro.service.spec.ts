import { TestBed } from '@angular/core/testing';

import { ProfissionalConteudoCadastroService } from './profissional-conteudo-cadastro.service';

describe('ProfissionalConteudoCadastroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfissionalConteudoCadastroService = TestBed.get(ProfissionalConteudoCadastroService);
    expect(service).toBeTruthy();
  });
});
