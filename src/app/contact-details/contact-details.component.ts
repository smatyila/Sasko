import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  email: string;
  message: string;
  constructor() {
    this.message = 'If you have any questions or feedback, send us a message below and we’ll get back to you soon!';
    this.email = 'SaskoCustomerCare@pioneerfoods.co.za';
  }

  ngOnInit() {
  }

}
