import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Character3Component } from './character3.component';

describe('Character3Component', () => {
  let component: Character3Component;
  let fixture: ComponentFixture<Character3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Character3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Character3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
