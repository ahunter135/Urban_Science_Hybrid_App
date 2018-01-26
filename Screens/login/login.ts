import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HTTP } from '@ionic-native/http';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public loginData = {
    username: "",
    password: ""
  }
  constructor(public alertCtrl: AlertController, public navCtrl: NavController, private storage: Storage, public http: HTTP) {
  }
  ionViewDidLoad() {
    this.storage.set('LoggedIn', false);
  }

  login() {
    this.loginData.username = this.loginData.username.toLowerCase();
    let url = "https://hidden-depths-27519.herokuapp.com/";
    this.http.setHeader('Content-Type', 'application/json');
    this.http.setDataSerializer('json');
    this.http.post(url + "login", this.loginData, {})
      .then(response => {
        if (response.data === "Success") {
          this.storage.set('LoggedIn', true);
          //getAllForms
          this.navCtrl.setRoot(HomePage);
        }
      })
      .catch(err => alert(JSON.stringify(err)));
  }

}
