import { TestBed } from '@angular/core/testing';

import { ProfissionalConteudoImagemService } from './profissional-conteudo-imagem.service';

describe('ProfissionalConteudoImagemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfissionalConteudoImagemService = TestBed.get(ProfissionalConteudoImagemService);
    expect(service).toBeTruthy();
  });
});
