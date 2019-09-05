import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergenciaUtilizacaoPage } from './emergencia-utilizacao.page';

describe('EmergenciaUtilizacaoPage', () => {
  let component: EmergenciaUtilizacaoPage;
  let fixture: ComponentFixture<EmergenciaUtilizacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergenciaUtilizacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergenciaUtilizacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
