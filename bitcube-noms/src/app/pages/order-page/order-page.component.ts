import { Component, OnInit } from '@angular/core';
import { VoiceRecognitionService } from 'src/app/services/voice-recognition.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss'],
})
export class OrderPageComponent implements OnInit {
  total: number = 0;
  tax: number = 0;
  items: any;
  showMenu = false;

  constructor(
    public VoiceService: VoiceRecognitionService,
    private OrderService: OrderService
  ) {
    this.VoiceService.init();
    this.OrderService.initOrder();
  }

  ngOnInit(): void {
    this.OrderService.menu.subscribe((x) => {
      this.showMenu = x;
    });
    this.OrderService.order.subscribe((items) => {
      this.items = items;
      items.forEach((x: any) => {
        this.total = this.total + x.count * x.total;
      });
      console.log(this.total, this.tax);
      this.tax = +(0.15 * this.total).toFixed(2);
      this.total = +this.total.toFixed(2);
    });
  }

  startService() {
    this.VoiceService.start();
  }

  stopService() {
    this.VoiceService.stop();
  }
}
