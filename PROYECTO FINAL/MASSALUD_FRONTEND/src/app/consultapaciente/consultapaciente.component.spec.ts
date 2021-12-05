import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultapacienteComponent } from './consultapaciente.component';

describe('ConsultapacienteComponent', () => {
  let component: ConsultapacienteComponent;
  let fixture: ComponentFixture<ConsultapacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultapacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultapacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
