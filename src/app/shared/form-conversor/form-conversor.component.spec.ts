import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConversorComponent } from './form-conversor.component';

describe('FormConversorComponent', () => {
  let component: FormConversorComponent;
  let fixture: ComponentFixture<FormConversorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormConversorComponent]
    });
    fixture = TestBed.createComponent(FormConversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
