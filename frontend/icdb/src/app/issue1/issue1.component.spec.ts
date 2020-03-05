import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Issue1Component } from './issue1.component';

describe('Issue1Component', () => {
  let component: Issue1Component;
  let fixture: ComponentFixture<Issue1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Issue1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Issue1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
