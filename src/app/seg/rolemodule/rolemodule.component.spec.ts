import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolemoduleComponent } from './rolemodule.component';

describe('RolemoduleComponent', () => {
  let component: RolemoduleComponent;
  let fixture: ComponentFixture<RolemoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolemoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolemoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
