import { Component,ViewChild } from '@angular/core';
import { Platform,Nav,AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Storage} from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MarketcloudServices } from '../providers/marketcloud-services';
import {ConfigService } from '../providers/config-service';
import { HomePage } from '../pages/home/home';
import {Cartpage} from '../pages/cartpage/cartpage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav :Nav;
  rootPage:any = HomePage;
  pages:Array<{title:string,component:any}>;
   marketcloudAppNamespace: string = 'emovieshop';

  constructor(public platform: Platform, private configuration: ConfigService,public statusBar:StatusBar,public splashScreen:SplashScreen,
              private marketcloud: MarketcloudServices,public storage:Storage, private alertCtrl: AlertController)  
               {
                 this.initializeApp();
                  this.pages = [
        { title: 'Home', component: HomePage },
        { title: 'cart', component: Cartpage },

        
      ];
               

                 /*
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });*/
  }
initializeApp(){
  this.platform.ready().then(()=>{
    this.statusBar.styleDefault();
    this.splashScreen.hide();
  });
}
 openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}

