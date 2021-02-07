import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersMangerComponent } from './users-manger.component';

describe('UsersMangerComponent', () => {
  let component: UsersMangerComponent;
  let fixture: ComponentFixture<UsersMangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersMangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersMangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
