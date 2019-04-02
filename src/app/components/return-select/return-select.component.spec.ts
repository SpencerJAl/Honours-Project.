import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnSelectComponent } from './return-select.component';

describe('ReturnSelectComponent', () => {
  let component: ReturnSelectComponent;
  let fixture: ComponentFixture<ReturnSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
