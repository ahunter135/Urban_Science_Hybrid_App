import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormPage } from '../form/form';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public objects = [];
  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    for (var i = 0; i < 10; i++) {
      let item = {
        photo: "https://via.placeholder.com/800x600",
        title: "Hello " + i,
        subtitle: "This is object " + i
      }
      this.objects.push(item);
    }
  }

  addForm() {
    this.navCtrl.push(FormPage);
  }

}
