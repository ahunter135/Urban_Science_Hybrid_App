import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormPage } from '../form/form'
import { HomePage } from '../home/home'

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
    rootPage: any = HomePage;
  selectedItem: any;
  icons: string[];
  titles: string[];
  //items: Array<{title: string, note: string, icon: string}>;
  items: Array<{ title: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    this.titles = ['Add Form', 'View Forms List']
    for (let i = 0; i < this.titles.length; i++) {
      this.items.push({
        title: this.titles[i]
        //note: 'This is item #' + i,
       // icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    
      if (item == this.items[0]) {
          this.navCtrl.push(FormPage);
      }
      else if (item == this.items[1]) {
          this.navCtrl.popToRoot();
      }
      
  }
}
