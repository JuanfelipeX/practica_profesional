import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerramientaActualizarComponent } from './herramienta-actualizar.component';

describe('HerramientaActualizarComponent', () => {
  let component: HerramientaActualizarComponent;
  let fixture: ComponentFixture<HerramientaActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerramientaActualizarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerramientaActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
