/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IsraelMapComponent } from './israel-map.component';

describe('IsraelMapComponent', () => {
  let component: IsraelMapComponent;
  let fixture: ComponentFixture<IsraelMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsraelMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsraelMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
