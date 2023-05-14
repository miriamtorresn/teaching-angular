import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from "@angular/forms";

import { BasicFormComponent } from './basic-form.component';

describe('BasicFormComponent', () => {
  let component: BasicFormComponent;
  let fixture: ComponentFixture<BasicFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicFormComponent],
      imports: [ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(BasicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
