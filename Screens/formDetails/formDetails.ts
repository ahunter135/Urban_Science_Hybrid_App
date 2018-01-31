import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-list',
  templateUrl: 'formDetails.html'
})
export class FormDetailsPage {
  public form;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private storage: Storage) {
  }
  ionViewWillLoad() {
    this.viewCtrl.setBackButtonText('');
    this.storage.get('ClickedForm').then((clickedForm) => {
      this.form = JSON.parse(clickedForm);
      this.form = this.form;
    });
  }
}
