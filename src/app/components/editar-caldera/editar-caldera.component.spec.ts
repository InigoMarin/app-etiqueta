import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCalderaComponent } from './editar-caldera.component';

describe('EditarCalderaComponent', () => {
  let component: EditarCalderaComponent;
  let fixture: ComponentFixture<EditarCalderaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCalderaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCalderaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
