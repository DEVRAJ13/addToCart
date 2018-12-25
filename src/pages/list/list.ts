import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  cartItems:any;
  cartData:any;
  productCount: number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
   this.cartItems = JSON.parse(localStorage.getItem('cart'));
   console.log("List",  this.cartItems);
   var result =  this.cartItems.reduce((unique, o) => {
    if(!unique.some(obj => obj.artical_id === o.artical_id && obj.length === o.length)) {
      unique.push(o);
    }
    return unique;
},[]);
   console.log(result);
   this.cartData = result;
  }


  decreaseProductCount() {
    if (this.productCount > 1) {
      this.productCount--;
    }
 
  }
 
  incrementProductCount() {
    this.productCount++;
 
  }


}
