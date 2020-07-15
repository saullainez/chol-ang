import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergentDatepickerComponent } from './emergent-datepicker.component';

describe('EmergentDatepickerComponent', () => {
  let component: EmergentDatepickerComponent;
  let fixture: ComponentFixture<EmergentDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergentDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergentDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
