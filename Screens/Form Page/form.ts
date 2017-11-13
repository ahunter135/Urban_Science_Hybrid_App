import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {
  public form = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }

  logForm() {
    let toast = this.toastCtrl.create({
      message: 'Form Added',
      duration: 3000
    });
    toast.present();
    this.storage.set('NewForm', JSON.stringify(this.form));
    this.navCtrl.pop();
  }

}
