import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import {MarketcloudServices } from '../../providers/marketcloud-services';
import {Products} from '../products/products';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
categories: Array<any>;

  constructor(public marketcloud: MarketcloudServices,public navCtrl: NavController,public alertCtrl: AlertController) {

marketcloud.client.categories.list()
 .then ((response)=>{
   this.categories = response.data;
 })
 .catch((error)=>{
   let alert = this.alertCtrl.create({
     title:'oops',
     subTitle:'unable to load movie categories,please check your internet connections',
     buttons:['ok']
   });
   alert.present();
 })
  
}
 showProducts(category){
   this.navCtrl.push(Products,{
     query : {
       category_id :category.id
     }
   });
 }   

}
