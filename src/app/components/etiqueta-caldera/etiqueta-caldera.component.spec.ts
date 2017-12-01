import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtiquetaCalderaComponent } from './etiqueta-caldera.component';

describe('EtiquetaCalderaComponent', () => {
  let component: EtiquetaCalderaComponent;
  let fixture: ComponentFixture<EtiquetaCalderaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtiquetaCalderaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtiquetaCalderaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
