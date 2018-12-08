import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MorePage } from '../more/more';
import { ProductPage } from '../product/product';
import { CartPage } from '../cart/cart';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProductPage;
  tab4Root = CartPage;
  tab3Root = MorePage;


  constructor() {

  }
}
