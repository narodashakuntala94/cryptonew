import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmminsupportComponent } from './admminsupport.component';

describe('AdmminsupportComponent', () => {
  let component: AdmminsupportComponent;
  let fixture: ComponentFixture<AdmminsupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmminsupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmminsupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
