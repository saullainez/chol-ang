import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionMenuComponent } from './permission-menu.component';

describe('PermissionMenuComponent', () => {
  let component: PermissionMenuComponent;
  let fixture: ComponentFixture<PermissionMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
