import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Character2Component } from './character2.component';

describe('Character2Component', () => {
  let component: Character2Component;
  let fixture: ComponentFixture<Character2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Character2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Character2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
