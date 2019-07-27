import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assign61Component } from './assign61.component';

describe('Assign61Component', () => {
  let component: Assign61Component;
  let fixture: ComponentFixture<Assign61Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assign61Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assign61Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
