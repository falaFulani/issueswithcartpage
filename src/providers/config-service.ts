import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

/*
  Generated class for the ConfigService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ConfigService {
data:any;
  constructor() {
    console.log('Hello ConfigService Provider');
  }
  set(key,value){
    this.data[key]=value;
  }
  get(key){
    return this.data[key];
  }

}
