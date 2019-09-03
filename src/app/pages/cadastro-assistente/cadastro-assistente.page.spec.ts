import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAssistentePage } from './cadastro-assistente.page';

describe('CadastroAssistentePage', () => {
  let component: CadastroAssistentePage;
  let fixture: ComponentFixture<CadastroAssistentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroAssistentePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroAssistentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
