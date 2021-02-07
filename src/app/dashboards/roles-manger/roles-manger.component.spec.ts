import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesMangerComponent } from './roles-manger.component';

describe('RolesMangerComponent', () => {
  let component: RolesMangerComponent;
  let fixture: ComponentFixture<RolesMangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolesMangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesMangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
