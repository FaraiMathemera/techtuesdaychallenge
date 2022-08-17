import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeLoaderComponent } from './components/home-loader/home-loader.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { MobileTrackingComponent } from './pages/mobile-tracking-page/mobile-tracking.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AssistantComponent } from './components/assistant/assistant.component';
import { MenuComponent } from './components/menu/menu.component';
import { DespatchPageComponent } from './pages/despatch-page/despatch-page.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { OrderOnlinePageComponent } from './pages/order-online-page/order-online-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api/api.service';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'tracking/:id', component: MobileTrackingComponent },
  { path: 'order/:id', component: OrderPageComponent },
  { path: 'order-online/:id', component: OrderOnlinePageComponent },
  { path: 'dispatch', component: DespatchPageComponent },
  { path: 'payment/:id', component: PaymentPageComponent },
  { path: 'trigger/:id', component: ApiService },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeLoaderComponent,
    OrderPageComponent,
    MobileTrackingComponent,
    HomePageComponent,
    AssistantComponent,
    MenuComponent,
    DespatchPageComponent,
    PaymentPageComponent,
    OrderOnlinePageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatProgressBarModule,
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
