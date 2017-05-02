import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Itempage } from './itempage';

@NgModule({
  declarations: [
    Itempage,
  ],
  imports: [
    IonicPageModule.forChild(Itempage),
  ],
  exports: [
    Itempage
  ]
})
export class ItempageModule {}
