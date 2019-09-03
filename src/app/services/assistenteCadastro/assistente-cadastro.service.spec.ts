import { TestBed } from '@angular/core/testing';

import { AssistenteCadastroService } from './assistente-cadastro.service';

describe('AssistenteCadastroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssistenteCadastroService = TestBed.get(AssistenteCadastroService);
    expect(service).toBeTruthy();
  });
});
