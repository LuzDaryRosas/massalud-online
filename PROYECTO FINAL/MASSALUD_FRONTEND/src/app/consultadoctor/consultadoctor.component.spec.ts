import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultadoctorComponent } from './consultadoctor.component';

describe('ConsultadoctorComponent', () => {
  let component: ConsultadoctorComponent;
  let fixture: ComponentFixture<ConsultadoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultadoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultadoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
