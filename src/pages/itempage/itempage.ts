import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import {ConfigService } from '../../providers/config-service';
import {MarketcloudServices } from '../../providers/marketcloud-services';
/**
 * Generated class for the Itempage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-itempage',
  templateUrl: 'itempage.html',
})
export class Itempage {
  product:any;
  selectedVariants:any ={};
  cart_id:number;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,public alertCtrl: AlertController,public navParams: NavParams,public marketcloud:MarketcloudServices,public configuration: ConfigService) {
   this.product = this.navParams.get('product');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Itempage');
  }
addToCart(product) {
  	
  	let loading = this.loadingCtrl.create({
	    content: 'Adding to cart...'
	  });
  	loading.present();

    let line_item:any = {};

    line_item.product_id = this.product.id;
    line_item.quantity = 1;

    if (this.product.type === 'product_with_variants'){
      line_item.options = this.selectedVariants;
    }

    this.marketcloud.client.carts.add(this.configuration.get('cart_id'),[
        line_item
    ])
  	.then((response) => {
      loading.dismiss();
      let alert = this.alertCtrl.create({
          title: 'Added to cart!',
          subTitle: 'Item added to cart',
          buttons: ['Ok']
        });

        alert.present();

    })
    .catch((error) => {
      loading.dismiss();
      let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'An error has occurred, please retry.',
          buttons: ['Ok']
        });
        alert.present();

    })
  }

  keys(obj) : Array<string> {
    return Object.keys(obj);
  }


  requiredOptionsAreMissing() {
    


    if (this.product.type === 'product_with_variants') {
      if (Object.keys(this.selectedVariants).length < Object.keys(this.product.variantsDefinition).length)
        return true;
    }

    return false;
  }

}
