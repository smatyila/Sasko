import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ContactDetailsComponent } from './contact-details.component';

describe('ContactDetailsComponent', () => {
  let component: ContactDetailsComponent;
  let fixture: ComponentFixture<ContactDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDetailsComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have email', () => {
    const contactComponent = fixture.debugElement.componentInstance;
    expect(contactComponent.email).toEqual('SaskoCustomerCare@pioneerfoods.co.za');
  });
  it('should have message', () => {
    const contactComponent = fixture.debugElement.componentInstance;
    const message = 'If you have any questions or feedback, send us a message below and we’ll get back to you soon!';
    expect(contactComponent.message).toEqual(message);
  });
});
