import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public objects = [];
  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    let item = {
      photo: "https://via.placeholder.com/800x600",
      title: "Object",
      subtitle: "This is object "
    }
    for (var i = 0; i < 10; i++) {
      let item = {
        photo: "https://via.placeholder.com/800x600",
        title: "Object " + i,
        subtitle: "This is object " + i
      }
      this.objects.push(item);
    }
  }

}
