import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAddLeaveComponent } from './emp-add-leave.component';

describe('EmpAddLeaveComponent', () => {
  let component: EmpAddLeaveComponent;
  let fixture: ComponentFixture<EmpAddLeaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpAddLeaveComponent]
    });
    fixture = TestBed.createComponent(EmpAddLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
