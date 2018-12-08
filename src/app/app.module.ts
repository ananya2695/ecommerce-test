import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductPage } from '../pages/product/product';
import { MorePage } from '../pages/more/more';
import { ProductServiceProvider } from '../providers/product-service/product-service';
import { HttpClientModule } from '@angular/common/http';
import { StarRatingModule } from 'ionic3-star-rating';
import { Ionic2RatingModule } from 'ionic2-rating';
import { ProductDetailPage } from '../pages/product-detail/product-detail';
import { CartPage } from '../pages/cart/cart';
import { CartServiceProvider } from '../providers/cart-service/cart-service';



@NgModule({
  declarations: [
    MyApp,
    ProductPage,
    MorePage,
    HomePage,
    TabsPage,
    ProductDetailPage,
    CartPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StarRatingModule,
    Ionic2RatingModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProductPage,
    MorePage,
    HomePage,
    TabsPage,
    ProductDetailPage,
    CartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductServiceProvider,
    CartServiceProvider
  ]
})
export class AppModule {}
