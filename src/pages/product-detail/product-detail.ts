import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductServiceProvider } from '../../providers/product-service/product-service';
import { Product } from '../product/product.model';

/**
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {
  id: number;
  detail: Product;
  rating:number;
  page : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public productService: ProductServiceProvider) {
    this.id = this.navParams.get('Id');
    this.page = this.navParams.get('page');
    console.log(this.page);
  }

  ionViewDidLoad() {
    this.showProductDetail();
  }

  showProductDetail() {
    this.rating = 0;
    this.productService.getPoductDetail(this.id).then((res: Product) => {
      this.detail = res;
      this.rating = this.detail.rating;
      console.log(this.rating);
    }, err => {
      console.log(err);
    });
  }

}
