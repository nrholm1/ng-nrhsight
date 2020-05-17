import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/order';
import { SalesDataService } from '../../services/sales-data.service';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor(private _salesData: SalesDataService) { }

  orders: Order[];
  total = 0;
  page = 1;
  limit = 10;
  loading = false;

  ngOnInit(): void {
    this.getOrders();
  }

  
  getOrders(): void {
    this._salesData.getOrders(this.page, this.limit)
      .subscribe(res => {
        console.log("Result from getOrders: ", res);
        this.orders = res['page']['data'];
        this.total = res['page'].total;
        this.loading = false;
      });
  }

  goToPrevious(): void {
    // if (this.page > 1){
    this.page--;
    this.getOrders();
    
    console.log("Previous Button Clicked!"); //placeholder function for when onPrev event is emitted from template(HTML)
  }
  goToNext(): void {
    // if (this.page < (this.total / this.limit))
    
    this.page++;
    this.getOrders();
    
    console.log("Next Button Clicked!"); //placeholder function for when onNext event is emitted from template(HTML)
  }

  goToPage(n: number): void {
    this.page = n;
    this.getOrders();
  }
}






// orders: Order[] = [
//   {id: 1, customer: {id: 1, name: "Acme Hosting", state: "CA", email: "contact@acmehosting.com"}, total: 235, placed: new Date(2020, 11, 9), fulfilled: new Date(), status: "Completed"},
//   {id: 2, customer: {id: 2, name: "Bob Jones Ltd", state: "CA", email: "contact@acmehosting.com"}, total: 450, placed: new Date(2020, 10, 14), fulfilled: new Date(), status: "Completed"},
//   {id: 3, customer: {id: 3, name: "Bugs B GmBH", state: "CA", email: "contact@acmehosting.com"}, total: 211, placed: new Date(2020, 11, 17), fulfilled: new Date(), status: "Completed"},
//   {id: 4, customer: {id: 4, name: "Bob Jones Ltd", state: "CA", email: "contact@acmehosting.com"}, total: 532, placed: new Date(2020, 8, 4), fulfilled: new Date(), status: "Completed"},
//   {id: 5, customer: {id: 5, name: "Acme Hosting", state: "CA", email: "contact@acmehosting.com"}, total: 230, placed: new Date(2020, 9, 21), fulfilled: new Date(), status: "Completed"},
// ];
