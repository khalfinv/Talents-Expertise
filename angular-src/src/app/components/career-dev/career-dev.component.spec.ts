/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CareerDevComponent } from './career-dev.component';

describe('CareerDevComponent', () => {
  let component: CareerDevComponent;
  let fixture: ComponentFixture<CareerDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
