import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the TabnavPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-tabnav',
  templateUrl: 'tabnav.html'
})
@IonicPage()
export class TabnavPage {

  homeRoot = 'HomePage'
  cartRoot = 'CartPage'
  favoriteRoot = 'FavoritePage'
  profileRoot = 'ProfilePage'


  constructor(public navCtrl: NavController) {}

}
