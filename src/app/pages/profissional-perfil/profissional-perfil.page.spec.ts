import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissionalPerfilPage } from './profissional-perfil.page';

describe('ProfissionalPerfilPage', () => {
  let component: ProfissionalPerfilPage;
  let fixture: ComponentFixture<ProfissionalPerfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfissionalPerfilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfissionalPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
