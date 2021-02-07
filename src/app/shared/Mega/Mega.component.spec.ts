/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MegaComponent } from './Mega.component';

describe('MegaComponent', () => {
  let component: MegaComponent;
  let fixture: ComponentFixture<MegaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MegaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
