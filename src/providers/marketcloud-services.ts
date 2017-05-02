import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
declare var Marketcloud: any;
import '../../node_modules/marketcloud-js/dist/marketcloud.min';


/*
  Generated class for the MarketcloudServices provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MarketcloudServices {
client: any;
  utils:any;s

  constructor() {

    this.client = new Marketcloud.Client({
      publicKey: '8ef2f4df-186b-47f1-9072-c179776567a6'
    });
    this.utils = Marketcloud.Utils;
    console.log('Hello MarketcloudServices Provider');
  }

}
