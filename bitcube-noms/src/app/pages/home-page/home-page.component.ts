import { Component, OnInit } from '@angular/core';
import { CloudService } from 'src/app/services/cloud/cloud.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private CloudService: CloudService) {}

  ngOnInit(): void {
    this.CloudService.getVehicle();
  }
}
