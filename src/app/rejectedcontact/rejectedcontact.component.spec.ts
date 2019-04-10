import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedcontactComponent } from './rejectedcontact.component';

describe('RejectedcontactComponent', () => {
  let component: RejectedcontactComponent;
  let fixture: ComponentFixture<RejectedcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectedcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
