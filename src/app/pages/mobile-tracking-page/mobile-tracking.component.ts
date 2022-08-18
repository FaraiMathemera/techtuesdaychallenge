import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-tracking',
  templateUrl: './mobile-tracking.component.html',
  styleUrls: ['./mobile-tracking.component.scss'],
})
export class MobileTrackingComponent implements OnInit {
  constructor() {}

  cooking = '../../../assets/images/burgers.gif';
  collect = '../../../assets/images/deliver.png';
  animation = this.collect;

  ngOnInit(): void {}
}
