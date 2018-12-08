import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductServiceProvider } from '../../providers/product-service/product-service';
import { ProductDetailPage } from '../product-detail/product-detail';
import { Product } from './product.model';

@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {
  productList: Array<Product>;
  constructor(
    public navCtrl: NavController,
    public productService: ProductServiceProvider
  ) {


  }
  ionViewDidLoad() {
    this.showProductList();
  }
  showProductList() {
    this.productService.getProductList().then((res: Array<Product>) => {
      this.productList = res;
      // console.log(this.productList);
    }, err => {
      console.log(err);
    });
  }

  gotoDetail(id) {
    this.navCtrl.push(ProductDetailPage, { Id: id, page: 'product' })
  }

}
