import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';
import { Vehicles } from 'src/app/types/types';

@Component({
  selector: 'app-despatch-page',
  templateUrl: './despatch-page.component.html',
  styleUrls: ['./despatch-page.component.scss'],
})
export class DespatchPageComponent implements OnInit {
  constructor(private OrderService: OrderService) {
    this.OrderService.initVehicleOrder();
  }
  order: any[] = [];
  ready: any[] = [];
  ngOnInit(): void {
    this.OrderService.orderVehicle.subscribe((orders: Vehicles[]) => {
      orders.forEach((order: any) => {
        if (order.collecting === true) {
        } else if (order.waiting === true) {
        }
      });
    });
  }
}
