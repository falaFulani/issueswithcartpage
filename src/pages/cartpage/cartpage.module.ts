import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Cartpage } from './cartpage';

@NgModule({
  declarations: [
    Cartpage,
  ],
  imports: [
    IonicPageModule.forChild(Cartpage),
  ],
  exports: [
    Cartpage
  ]
})
export class CartpageModule {}
