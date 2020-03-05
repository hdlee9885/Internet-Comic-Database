import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Issue2Component } from './issue2.component';

describe('Issue2Component', () => {
  let component: Issue2Component;
  let fixture: ComponentFixture<Issue2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Issue2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Issue2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
