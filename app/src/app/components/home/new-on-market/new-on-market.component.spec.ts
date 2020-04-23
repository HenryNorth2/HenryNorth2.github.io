import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOnMarketComponent } from './new-on-market.component';

describe('NewOnMarketComponent', () => {
  let component: NewOnMarketComponent;
  let fixture: ComponentFixture<NewOnMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOnMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOnMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
