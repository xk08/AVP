import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueroConversarPage } from './quero-conversar.page';

describe('QueroConversarPage', () => {
  let component: QueroConversarPage;
  let fixture: ComponentFixture<QueroConversarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueroConversarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueroConversarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
