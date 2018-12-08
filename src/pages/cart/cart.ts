import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartServiceProvider } from '../../providers/cart-service/cart-service';
import { Cart } from './cart.model';
import { ProductDetailPage } from '../product-detail/product-detail';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  cartList: Array<Cart>;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public cartService: CartServiceProvider) {
  }

  ionViewDidLoad() {
    this.showCartList();
  }

  showCartList() {
    this.cartService.getCartList().then((res: Array<Cart>) => {
      this.cartList = res;
      // console.log(this.productList);
    }, err => {
      console.log(err);
    });
  }

  add(index) {
    const piece = this.cartList[index].piece += 1;
    this.cartList[index].amount = piece * this.cartList[index].price;

  }
  remove(index) {
    if (this.cartList[index].piece > 1) {
      const piece = this.cartList[index].piece -= 1;
      this.cartList[index].amount = piece * this.cartList[index].price;

    }
  }

  calculate() {
    let total = 0;
    if (this.cartList && this.cartList.length > 0) {
      this.cartList.forEach(cart => {
        total += cart.amount;

      });
    }
    return total;
  }

  gotoDetail(id){
    this.navCtrl.push(ProductDetailPage,{Id:id , page: 'cart'})
    }

}
