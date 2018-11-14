import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContentComponent } from './body-content.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {MatCardModule} from '@angular/material';

describe('BodyContentComponent', () => {
  let component: BodyContentComponent;
  let fixture: ComponentFixture<BodyContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyContentComponent ],
      providers: [{ provide: MatCardModule, useValue: {} }],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
