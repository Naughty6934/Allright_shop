import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeServiceProvider } from "./home.service";
import { homeModel } from "./home.model";

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  homeData: homeModel = new homeModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, public homeServiceProvider: HomeServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.homeServiceProvider.getData().then(data => {
      this.homeData = data;
    })
  }

}
