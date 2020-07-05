import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableConfigurableComponent } from './datatable-configurable.component';

describe('DatatableConfigurableComponent', () => {
  let component: DatatableConfigurableComponent;
  let fixture: ComponentFixture<DatatableConfigurableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatableConfigurableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableConfigurableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
