import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookViewingModalComponent } from './book-viewing-modal.component';

describe('BookViewingModalComponent', () => {
  let component: BookViewingModalComponent;
  let fixture: ComponentFixture<BookViewingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookViewingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookViewingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
