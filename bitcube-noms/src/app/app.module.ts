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

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'tracking', component: MobileTrackingComponent },
  { path: 'order', component: OrderPageComponent },
  { path: 'order-online', component: OrderOnlinePageComponent },
  { path: 'dispatch', component: DespatchPageComponent },
  { path: 'payment', component: PaymentPageComponent },
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
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
