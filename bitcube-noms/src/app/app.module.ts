import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeLoaderComponent } from './components/home-loader/home-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLoaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
