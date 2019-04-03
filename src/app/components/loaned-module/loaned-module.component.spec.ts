import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanedModuleComponent } from './loaned-module.component';

describe('LoanedModuleComponent', () => {
  let component: LoanedModuleComponent;
  let fixture: ComponentFixture<LoanedModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanedModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanedModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
