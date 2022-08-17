import { Component, OnInit } from '@angular/core';
import { VoiceRecognitionService } from 'src/app/services/voice-recognition/voice-recognition.service';
import { OrderService } from 'src/app/services/order/order.service';
import { AudioService } from 'src/app/services/audio/audio.service';

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
  emptyOrder = true;

  constructor(
    public VoiceService: VoiceRecognitionService,
    private OrderService: OrderService,
    private AudioService: AudioService
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
    });
    this.OrderService.totals.subscribe((totals) => {
      this.total = totals.total;
      this.tax = totals.tax;
      if (totals.total > 0) {
        this.emptyOrder = false;
      }
    });
    this.AudioService.welcome();
  }

  startService() {
    this.VoiceService.start();
  }

  stopService() {
    this.VoiceService.stop();
  }
}
