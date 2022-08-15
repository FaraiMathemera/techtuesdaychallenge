import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  // Item counts
  baconCheeseBurgerCount = 1;
  beefBurgerCount = 1;
  chickenBurgerCount = 0;
  wings8Count = 0;
  wings12Count = 0;
  chipsLargeCount = 0;
  chipsMediumCount = 0;
  cokeCount = 0;
  fantaCount = 0;

  // Item prices
  prices: any = {
    baconCheeseBurger: 120,
    beefBurger: 100,
    chickenBurger: 95,
    wings8: 50,
    wings12: 80,
    chipsLarge: 35,
    chipsMedium: 20,
    soda: 15,
  };

  // Invoice items
  items: {
    name: string;
    count: number;
    total: number;
    notes?: string[];
  }[] = [
    {
      name: 'Bacon & Cheese Burger',
      count: this.baconCheeseBurgerCount,
      total: this.baconCheeseBurgerCount * this.prices.baconCheeseBurger,
      notes: [],
    },
    {
      name: 'Beef Burger',
      count: this.beefBurgerCount,
      total: this.beefBurgerCount * this.prices.beefBurger,
      notes: [],
    },
    {
      name: 'Chicken Burger',
      count: this.chickenBurgerCount,
      total: this.chickenBurgerCount * this.prices.chickenBurger,
      notes: [],
    },
    {
      name: 'Chicken Wings (8pcs)',
      count: this.wings8Count,
      total: this.wings8Count * this.prices.wings8,
      notes: [],
    },
    {
      name: 'Chicken Wings (12pcs)',
      count: this.wings12Count,
      total: this.wings12Count * this.prices.wings12,
      notes: [],
    },
    {
      name: 'Chips (Large)',
      count: this.chipsLargeCount,
      total: this.chipsLargeCount * this.prices.chipsLarge,
      notes: [],
    },
    {
      name: 'Chips (Medium)',
      count: this.chipsMediumCount,
      total: this.chipsMediumCount * this.prices.chipsMedium,
      notes: [],
    },
    {
      name: 'Coke',
      count: this.cokeCount,
      total: this.cokeCount * this.prices.soda,
      notes: [],
    },
    {
      name: 'Fanta',
      count: this.fantaCount,
      total: this.fantaCount * this.prices.soda,
      notes: [],
    },
  ];

  private _order = new BehaviorSubject<any>(this.items);
  public order = this._order.asObservable();

  constructor() {}

  initOrder() {
    this._order.next(this.items);
  }

  addItem(
    item: string,
    amount: number,
    addRemove?: 'add' | 'remove' | 'clear'
  ) {
    switch (item) {
      case 'cheeseBurger':
        if (addRemove) {
          this.setAmount(0, addRemove);
        } else {
          this.items[0].count = amount;
        }
        break;
      case 'burger':
        if (addRemove) {
          this.setAmount(1, addRemove);
        } else {
          this.items[1].count = amount;
        }
        break;
      case 'chickenBurger':
        if (addRemove) {
          this.setAmount(2, addRemove);
        } else {
          this.items[2].count = amount;
        }
        break;
      case 'wings8':
        if (addRemove) {
          this.setAmount(3, addRemove);
        } else {
          this.items[3].count = amount;
        }
        break;
      case 'wings12':
        if (addRemove) {
          this.setAmount(4, addRemove);
        } else {
          this.items[4].count = amount;
        }
        break;
      case 'chipsMedium':
        if (addRemove) {
          this.setAmount(5, addRemove);
        } else {
          this.items[5].count = amount;
        }
        break;
      case 'chipsLarge':
        if (addRemove) {
          this.setAmount(6, addRemove);
        } else {
          this.items[6].count = amount;
        }
        break;
      case 'coke':
        if (addRemove) {
          this.setAmount(7, addRemove);
        } else {
          this.items[7].count = amount;
        }
        break;
      case 'fanta':
        if (addRemove) {
          this.setAmount(8, addRemove);
        } else {
          this.items[8].count = amount;
        }
        break;
    }
  }

  addNotes(item: string, notes: string) {
    switch (item) {
      case 'cheeseBurger':
        if (!notes) {
          this.items[0].notes = [];
        } else {
          this.items[0].notes?.push(notes);
        }
        break;
      case 'burger':
        if (!notes) {
          this.items[1].notes = [];
        } else {
          this.items[1].notes?.push(notes);
        }
        break;
      case 'chickenBurger':
        if (!notes) {
          this.items[2].notes = [];
        } else {
          this.items[2].notes?.push(notes);
        }
        break;
      case 'wings8':
        if (!notes) {
          this.items[3].notes = [];
        } else {
          this.items[3].notes?.push(notes);
        }
        break;
      case 'wings12':
        if (!notes) {
          this.items[4].notes = [];
        } else {
          this.items[4].notes?.push(notes);
        }
        break;
      case 'chipsMedium':
        if (!notes) {
          this.items[5].notes = [];
        } else {
          this.items[5].notes?.push(notes);
        }
        break;
      case 'chipsLarge':
        if (!notes) {
          this.items[6].notes = [];
        } else {
          this.items[6].notes?.push(notes);
        }
        break;
      case 'coke':
        if (!notes) {
          this.items[7].notes = [];
        } else {
          this.items[7].notes?.push(notes);
        }
        break;
      case 'fanta':
        if (!notes) {
          this.items[8].notes = [];
        } else {
          this.items[8].notes?.push(notes);
        }
        break;
    }
  }

  setAmount(index: number, amount: string) {
    if (amount === 'add') {
      this.items[index].count = this.items[index].count + 1;
    } else if (amount === 'remove') {
      this.items[index].count = this.items[index].count - 1;
    } else {
      this.items[index].count = 0;
    }
  }
}
