import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { homeModel } from "./home.model";

/*
  Generated class for the HomeServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HomeServiceProvider {

  constructor(public http: Http) {
    console.log('Hello HomeServiceProvider Provider');
  }
  getData(): Promise <homeModel> {
    return this.http.get('../../assets/json/home.json')
    .toPromise()
    .then( resp => resp.json() as homeModel)
    .catch(err => err.reject(err.message || err));
   }

}
