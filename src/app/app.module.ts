import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {Cartpage} from '../pages/cartpage/cartpage';
import {Itempage } from '../pages/itempage/itempage';
import {Products} from '../pages/products/products';
import {MarketcloudServices } from '../providers/marketcloud-services';
import {ConfigService } from '../providers/config-service';

import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Products,
    Itempage,
    Cartpage
  ],
  imports: [
    BrowserModule,
IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Products,
    Itempage,
    Cartpage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    
MarketcloudServices ,
ConfigService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
