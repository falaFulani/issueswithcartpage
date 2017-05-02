import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {MarketcloudServices } from '../../providers/marketcloud-services';
import {Itempage} from '../itempage/itempage';
/**
 * Generated class for the Products page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class Products {
  products: Array<any>

  constructor(public market:MarketcloudServices,public alertCtrl:AlertController, public navCtrl: NavController, public navParams: NavParams) {
    var promise:any;
  	if (this.navParams.get('query')){
  		promise = market.client.products.list(this.navParams.get('query'));
  	} else {
  		promise = market.client.products.list();
  	}

    promise
    .then((response) => {
    	this.products = response.data;
    })
    .catch((error) => {
    	let alert = this.alertCtrl.create({
          title: 'Oops',
          subTitle: 'Unable to load moive page, please check your internet connection.',
          buttons: ['Ok']
        });

        alert.present();
    })

}
   
 viewItemDetails(product){
  	// Showing single product details
  	this.navCtrl.push(Itempage,{
  		product : product
  	})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Products');
  }

}
