import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarIdeias } from './criar-ideias';

describe('CriarIdeias', () => {
  let component: CriarIdeias;
  let fixture: ComponentFixture<CriarIdeias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CriarIdeias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarIdeias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
