import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeEnquiryModalComponent } from './make-enquiry-modal.component';

describe('MakeEnquiryModalComponent', () => {
  let component: MakeEnquiryModalComponent;
  let fixture: ComponentFixture<MakeEnquiryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeEnquiryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeEnquiryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
