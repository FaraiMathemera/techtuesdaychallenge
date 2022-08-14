import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss'],
})
export class OrderPageComponent implements OnInit {
  total: number = 0;
  tax: number = 0;
  items: any[] = [
    { name: 'Bacon & Cheese Burger', count: 1, total: 120.5 },
    { name: 'Beef Burger', count: 1, total: 120.0 },
    { name: 'Chicken Burger', count: 1, total: 120.5 },
    // { name: 'Chicken Wings (8pcs)', count: 1, total: 120.0 },
    // { name: 'Chicken Wings (12pcs)', count: 1, total: 120.0 },
    // { name: 'Chips (Large)', count: 1, total: 120.0 },
    // { name: 'Chips (Medium)', count: 1, total: 120.0 },
    // { name: 'Coke', count: 1, total: 120.5 },
    // { name: 'Fanta', count: 1, total: 120.0 },
  ];

  constructor() {}

  ngOnInit(): void {
    this.items.forEach((x) => {
      this.total = this.total + x.count * x.total;
    });

    this.tax = +(0.15 * this.total).toFixed(2);
    this.total = +(this.total + this.tax).toFixed(2);
  }
}
