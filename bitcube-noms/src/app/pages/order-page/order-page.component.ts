import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss'],
})
export class OrderPageComponent implements OnInit {
  total: number = 0;
  tax: number = 0;

  // Item counts
  baconCheeseBurgerCount = 0;
  beefBurgerCount = 0;
  chickenBurgerCount = 0;
  wings8Count = 0;
  wings12Count = 0;
  chipsLargeCount = 0;
  chipsMediumCount = 0;
  cokeCount = 0;
  fantaCount = 0;

  // Item prices
  prices: any = {
    baconCheeseBurger: { price: 120 },
    beefBurger: { price: 100 },
    chickenBurger: { price: 95 },
    wings8: { price: 50 },
    wings12: { price: 80 },
    chipsLarge: { price: 35 },
    chipsMedium: { price: 20 },
    soda: { price: 15 },
  };

  // Invoice items
  items: {
    name: string;
    count: number;
    total: number;
    notes?: string | null;
  }[] = [
    {
      name: 'Bacon & Cheese Burger',
      count: this.baconCheeseBurgerCount,
      total: this.baconCheeseBurgerCount * this.prices.baconCheeseBurger,
      notes: null,
    },
    {
      name: 'Beef Burger',
      count: this.beefBurgerCount,
      total: this.beefBurgerCount * this.prices.beefBurger,
      notes: null,
    },
    {
      name: 'Chicken Burger',
      count: this.chickenBurgerCount,
      total: this.chickenBurgerCount * this.prices.chickenBurger,
      notes: null,
    },
    {
      name: 'Chicken Wings (8pcs)',
      count: this.wings8Count,
      total: this.wings8Count * this.prices.wings8,
      notes: null,
    },
    {
      name: 'Chicken Wings (12pcs)',
      count: this.wings12Count,
      total: this.wings12Count * this.prices.wings12,
      notes: null,
    },
    {
      name: 'Chips (Large)',
      count: this.chipsLargeCount,
      total: this.chipsLargeCount * this.prices.chipsLarge,
      notes: null,
    },
    {
      name: 'Chips (Medium)',
      count: this.chipsMediumCount,
      total: this.chipsMediumCount * this.prices.chipsMedium,
      notes: null,
    },
    {
      name: 'Coke',
      count: this.cokeCount,
      total: this.cokeCount * this.prices.soda,
      notes: null,
    },
    {
      name: 'Fanta',
      count: this.fantaCount,
      total: this.fantaCount * this.prices.soda,
      notes: null,
    },
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
