import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XpertComponent } from './xpert.component';

describe('XpertComponent', () => {
  let component: XpertComponent;
  let fixture: ComponentFixture<XpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
