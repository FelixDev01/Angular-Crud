import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarIdeia } from './listar-ideia';

describe('ListarIdeia', () => {
  let component: ListarIdeia;
  let fixture: ComponentFixture<ListarIdeia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarIdeia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarIdeia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
