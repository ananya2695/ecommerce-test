import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProductServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductServiceProvider {

  constructor(public http: HttpClient) {

  }

  getProductList() {
    return new Promise((resolve, reject) => {
      this.http.get('http://demo7209573.mockable.io/train/product/getAll').subscribe(res => {
        // console.log(res);
        resolve(res);
      }, err => {
        // console.log(err);
        reject(err);
      })
    })
  }

  getPoductDetail(id) {
    return new Promise((resolve, reject) => {
      this.http.get('http://demo7209573.mockable.io/train/product/getById/' + id).subscribe(res => {
        // console.log(res);
        resolve(res);
      }, err => {
        // console.log(err);
        reject(err);
      })
    })
  }

}
