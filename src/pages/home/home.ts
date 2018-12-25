import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  items: Object[] = []
  itemsInCart: Object[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {
        title: 'Accents of the South Fabric Swatches',
        image_url: 'https://sailrite.files.wordpress.com/2012/08/dsc_59301.jpg',
        quantityInCart: 0,
        artical_id: 1,
        price: 15,
        unit: 'meters',
        length: 235
      },{
        title: 'Dupioni Silk Fabric',
        image_url: 'https://www.yourdictionary.com/images/definitions/lg/4223.fabric.jpg',
        quantityInCart: 0,
        artical_id: 10,
        price: 150,
        unit: 'meters',
        length: 45
      },{
        title: 'Tweed Check Fabric',
        image_url: 'http://accentsofthesouth.com/wp-content/uploads/2018/01/Accents-of-the-South-Fabric-Swatches.jpg',
        quantityInCart: 0,
        artical_id: 11,
        price: 120,
        unit: 'meters',
        length: 450
      },{
        title: 'Polyester Viscose Suit Fabric',
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSleP6x9fjZewX5jN1sxGtCAOACAWVFvQ0WFfzcuWV00QzrKotx_g',
        quantityInCart: 0,
        artical_id: 15,
        price: 100,
        unit: 'meters',
        length: 452
      },
     
  ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  addToCart(item, price){
    console.log(price);
    item.quantityInCart += 1;
    this.itemsInCart.push(item);
    console.log(this.itemsInCart);
    localStorage.setItem('cart', JSON.stringify(this.itemsInCart));
    this.goToList();
  }

  goToList() {
    this.navCtrl.push('ListPage');
  }

}
