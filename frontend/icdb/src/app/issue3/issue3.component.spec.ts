import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Issue3Component } from './issue3.component';

describe('Issue3Component', () => {
  let component: Issue3Component;
  let fixture: ComponentFixture<Issue3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Issue3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Issue3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
