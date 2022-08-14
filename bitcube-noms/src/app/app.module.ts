import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeLoaderComponent } from './components/home-loader/home-loader.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { ServerPageComponent } from './pages/server-page/server-page.component';
import { MobileTrackingComponent } from './pages/mobile-tracking-page/mobile-tracking.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AssistantComponent } from './components/assistant/assistant.component';
import { MenuComponent } from './components/menu/menu.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'mobile', component: MobileTrackingComponent },
  { path: 'order', component: OrderPageComponent },
  { path: 'despatch', component: ServerPageComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeLoaderComponent,
    OrderPageComponent,
    ServerPageComponent,
    MobileTrackingComponent,
    HomePageComponent,
    AssistantComponent,
    MenuComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
