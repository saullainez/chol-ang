import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerMyComponent } from './datepicker-my.component';

describe('DatepickerMyComponent', () => {
  let component: DatepickerMyComponent;
  let fixture: ComponentFixture<DatepickerMyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerMyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
