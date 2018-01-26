import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';


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

  public form = {
    dealName: '',
  	dealAddress1: '',
  	dealAddress2: '',
  	dealCity: '',
  	dealState: '',
  	dealzip: '',
  	dealOther: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }

  submit() {
    //make http call here to /submitForm
    this.navCtrl.pop();
  }
  cancel() {
    this.navCtrl.setRoot(HomePage);
  }

}
