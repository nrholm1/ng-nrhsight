import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/order';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[] = [
    {id: 1, customer: {id: 1, name: "Acme Hosting", state: "CA", email: "contact@acmehosting.com"}, total: 235, placed: new Date(2020, 11, 9), fulfilled: new Date(), status: "Completed"},
    {id: 2, customer: {id: 2, name: "Bob Jones Ltd", state: "CA", email: "contact@acmehosting.com"}, total: 450, placed: new Date(2020, 10, 14), fulfilled: new Date(), status: "Completed"},
    {id: 3, customer: {id: 3, name: "Bugs B GmBH", state: "CA", email: "contact@acmehosting.com"}, total: 211, placed: new Date(2020, 11, 17), fulfilled: new Date(), status: "Completed"},
    {id: 4, customer: {id: 4, name: "Bob Jones Ltd", state: "CA", email: "contact@acmehosting.com"}, total: 532, placed: new Date(2020, 8, 4), fulfilled: new Date(), status: "Completed"},
    {id: 5, customer: {id: 5, name: "Acme Hosting", state: "CA", email: "contact@acmehosting.com"}, total: 230, placed: new Date(2020, 9, 21), fulfilled: new Date(), status: "Completed"},
  ];

  ngOnInit(): void {
  }

}
