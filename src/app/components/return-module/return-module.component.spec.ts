import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnModuleComponent } from './return-module.component';

describe('ReturnModuleComponent', () => {
  let component: ReturnModuleComponent;
  let fixture: ComponentFixture<ReturnModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
