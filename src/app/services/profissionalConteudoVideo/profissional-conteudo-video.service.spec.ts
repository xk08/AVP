import { TestBed } from '@angular/core/testing';

import { ProfissionalConteudoVideoService } from './profissional-conteudo-video.service';

describe('ProfissionalConteudoVideoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfissionalConteudoVideoService = TestBed.get(ProfissionalConteudoVideoService);
    expect(service).toBeTruthy();
  });
});
