import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorPreviewComponent } from './author-preview.component';

describe('AuthorPreviewComponent', () => {
  let component: AuthorPreviewComponent;
  let fixture: ComponentFixture<AuthorPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
