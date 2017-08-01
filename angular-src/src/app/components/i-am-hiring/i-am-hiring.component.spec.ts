/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IAmHiringComponent } from './i-am-hiring.component';

describe('IAmHiringComponent', () => {
  let component: IAmHiringComponent;
  let fixture: ComponentFixture<IAmHiringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IAmHiringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IAmHiringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
