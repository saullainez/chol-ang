import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergentInputComponent } from './emergent-input.component';

describe('EmergentInputComponent', () => {
  let component: EmergentInputComponent;
  let fixture: ComponentFixture<EmergentInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergentInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergentInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
