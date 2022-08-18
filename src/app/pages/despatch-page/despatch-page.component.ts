import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';
import { Vehicles } from 'src/app/types/types';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-despatch-page',
  templateUrl: './despatch-page.component.html',
  styleUrls: ['./despatch-page.component.scss'],
})
export class DespatchPageComponent implements OnInit {
  constructor(
    private OrderService: OrderService,
    public snackBar: MatSnackBar
  ) {
    this.OrderService.initVehicleOrder();
  }

  orders?: any[] = [];
  readyOrders?: any[] = [{}];
  orderNumber: number | undefined = 0;
  registration: string | undefined = 'CY234234';
  color: string | undefined = 'blue';
  index: number = 0;

  ngOnInit(): void {
    this.OrderService.orderVehicle.subscribe((Orders: Vehicles) => {
      // this.orders = [];
      // this.readyOrders = [];
      Orders?.order?.forEach((order?: any) => {
        if (Orders.collecting === true) {
          this.orderNumber = Orders?.vehicleId;
          this.registration = Orders.registration;
          this.color = Orders.color;
          this.readyOrders = Orders?.order;
        } else if (Orders.waiting === true) {
          this?.orders?.push(Orders);
        }
      });
    });
  }

  completeOrder() {
    this.OrderService.setVehicleOrder(this.index, 'completed');
    this.snackBar.open('Order completed', '', {
      duration: 2000,
    });
  }
}
