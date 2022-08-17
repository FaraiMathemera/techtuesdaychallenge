import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { state } from 'src/app/enum/state';
import { CloudService } from 'src/app/services/cloud/cloud.service';
import { Vehicles } from 'src/app/types/types';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  // Item prices
  prices: any = [
    { name: 'baconCheeseBurger', price: 120 },
    { name: 'beefBurger', price: 100 },
    { name: 'chickenBurger', price: 95 },
    { name: 'wings8', price: 50 },
    { name: 'wings12', price: 80 },
    { name: 'chipsLarge', price: 35 },
    { name: 'chipsMedium', price: 20 },
    { name: 'coke', price: 15 },
    { name: 'fanta', price: 15 },
  ];

  // Invoice items
  items: {
    name: string;
    count: number;
    total: number;
    notes?: string[];
  }[] = [
    {
      name: 'Bacon & Cheese Burger',
      count: 0,
      total: 0,
      notes: [],
    },
    {
      name: 'Beef Burger',
      count: 0,
      total: 0,
      notes: [],
    },
    {
      name: 'Chicken Burger',
      count: 0,
      total: 0,
      notes: [],
    },
    {
      name: 'Chicken Wings (8pcs)',
      count: 0,
      total: 0,
      notes: [],
    },
    {
      name: 'Chicken Wings (12pcs)',
      count: 0,
      total: 0,
      notes: [],
    },
    {
      name: 'Chips (Large)',
      count: 0,
      total: 0,
      notes: [],
    },
    {
      name: 'Chips (Medium)',
      count: 0,
      total: 0,
      notes: [],
    },
    {
      name: 'Coke',
      count: 0,
      total: 0,
      notes: [],
    },
    {
      name: 'Fanta',
      count: 0,
      total: 0,
      notes: [],
    },
  ];

  completeOrder: Vehicles[] = [];

  total = { tax: 0, total: 0 };

  private _orderVehicle = new BehaviorSubject<any>(this.items);
  public orderVehicle = this._orderVehicle.asObservable();

  private _order = new BehaviorSubject<any>(this.items);
  public order = this._order.asObservable();

  private _menu = new BehaviorSubject<boolean>(true);
  public menu = this._menu.asObservable();

  private _state = new BehaviorSubject<number>(state.Ordering);
  public state = this._state.asObservable();

  private _total = new BehaviorSubject<{ tax: number; total: number }>(
    this.total
  );
  public totals = this._total.asObservable();

  constructor(private CloudService: CloudService) {}

  initOrder() {
    this._order.next(this.items);
  }

  async initVehicleOrder() {
    this.completeOrder = await this.CloudService.getOrders();
    this._orderVehicle.next(this.completeOrder);
  }

  setMenu(show: boolean) {
    this._menu.next(show);
  }

  setState(state: number) {
    this._state.next(state);
  }

  addItem(
    item: string,
    amount: number,
    addRemove?: 'add' | 'remove' | 'clear' | null
  ) {
    switch (item) {
      case 'cheeseBurger':
        if (addRemove) {
          this.setAmount(0, addRemove);
        } else {
          this.items[0].count = amount;
        }
        this.updatePrice(0);
        break;
      case 'burger':
        if (addRemove) {
          this.setAmount(1, addRemove);
        } else {
          this.items[1].count = amount;
        }
        this.updatePrice(1);
        break;
      case 'chickenBurger':
        if (addRemove) {
          this.setAmount(2, addRemove);
        } else {
          this.items[2].count = amount;
        }
        this.updatePrice(2);
        break;
      case 'wings8':
        if (addRemove) {
          this.setAmount(3, addRemove);
        } else {
          this.items[3].count = amount;
        }
        this.updatePrice(3);
        break;
      case 'wings12':
        if (addRemove) {
          this.setAmount(4, addRemove);
        } else {
          this.items[4].count = amount;
        }
        this.updatePrice(4);
        break;
      case 'chipsMedium':
        if (addRemove) {
          this.setAmount(5, addRemove);
        } else {
          this.items[5].count = amount;
        }
        this.updatePrice(5);
        break;
      case 'chipsLarge':
        if (addRemove) {
          this.setAmount(6, addRemove);
        } else {
          this.items[6].count = amount;
        }
        this.updatePrice(6);
        break;
      case 'coke':
        if (addRemove) {
          this.setAmount(7, addRemove);
        } else {
          this.items[7].count = amount;
        }
        this.updatePrice(7);
        break;
      case 'fanta':
        if (addRemove) {
          this.setAmount(8, addRemove);
        } else {
          this.items[8].count = amount;
        }
        this.updatePrice(8);
        break;
    }
    this.updateTotal();
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
    this.updateTotal();
  }

  setAmount(index: number, amount: string) {
    if (amount === 'add') {
      this.items[index].count = this.items[index].count + 1;
    } else if (amount === 'remove') {
      this.items[index].count = this.items[index].count - 1;
    } else {
      this.items[index].count = 0;
    }
    this.updateTotal();
  }

  updatePrice(index: number) {
    this.items[index].total =
      this.items[index].count * this.prices[index].price;
  }

  updateTotal() {
    this.total.tax = 0;
    this.total.total = 0;
    this.items.forEach((x: any) => {
      this.total.total = this.total.total + x.count * x.total;
    });

    this.total.tax = +(0.15 * this.total.total).toFixed(2);
    this.total.total = +this.total.total.toFixed(2);
    this._total.next(this.total);
  }

  placeOrder() {}
}
