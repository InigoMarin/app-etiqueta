import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalderaEtiquetasComponent } from './caldera-etiquetas.component';

describe('CalderaEtiquetasComponent', () => {
  let component: CalderaEtiquetasComponent;
  let fixture: ComponentFixture<CalderaEtiquetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalderaEtiquetasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalderaEtiquetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
