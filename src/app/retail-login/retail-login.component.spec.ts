import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailLoginComponent } from './retail-login.component';

describe('RetailLoginComponent', () => {
  let component: RetailLoginComponent;
  let fixture: ComponentFixture<RetailLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
