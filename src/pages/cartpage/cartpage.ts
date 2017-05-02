import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {ConfigService } from '../../providers/config-service';
import {MarketcloudServices } from '../../providers/marketcloud-services';
/**
 * Generated class for the Cartpage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cartpage',
  templateUrl: 'cartpage.html',
})
export class Cartpage {
cart:any = { items:[]};
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController,public marketcloud:MarketcloudServices,public configuration: ConfigService) {
 
       

 }

  ionViewDidLoad() {
     this.marketcloud.client.carts.getById(this.configuration.get('cart_id'))
    .then((response) => {
    	this.cart = response.data;
    })
    .catch((error) =>{
    	let alert = this.alertCtrl.create({
          title: 'Oops',
          subTitle: 'An error has occurred, unable to load the cart.',
          buttons: ['Ok']
        });

        alert.present();
    })

  }

  private updateQuantity(index,amount){
  	let promise:any;
  	if (this.cart.items[index].quantity + amount > 0) {
  		promise = this.marketcloud.client.carts.update(
  			this.configuration.get('cart_id'),
	  			[{
	  				product_id 	: this.cart.items[index].product_id,
	  				quantity 	: this.cart.items[index].quantity + amount,
	  				variant_id  : this.cart.items[index].variant_id || 0
	  	}])
  	} else if (this.cart.items[index].quantity + amount === 0) {
  		promise = this.marketcloud.client.carts.remove(
  			this.configuration.get('cart_id'),
	  			[{
	  				product_id 	: this.cart.items[index].product_id,
	  				variant_id  : this.cart.items[index].variant_id || 0
	  		}])
  	} else {

  		return;
  	}
  	promise
  	.then((response) => {
  		this.cart = response.data;
  	})
  	.catch((error) => {
  		
  		let alert = this.alertCtrl.create({
          title: 'Oops',
          subTitle: 'An error has occurred, cart not updated',
          buttons: ['Ok']
        });

        alert.present();
  	})
  }

  increaseQuantity(index) {
  	return this.updateQuantity(index,1);
  }

  decreaseQuantity(index) {
  	return this.updateQuantity(index,-1);
  }

  getCartTotal() {
  	if (this.cart.items.length === 0)
  		return 0;

  	return this.cart.items.map((item) => {
  		if (item.price_discount)
  			return item.quantity*item.price_discount;
  		else
  			return item.quantity*item.price;
  	}).reduce((a,b) => {
  		return a+b;
  	});
  }
  }


