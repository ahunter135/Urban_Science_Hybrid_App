import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';


import { FormPage } from '../form/form';
import { FormDetailsPage } from '../formDetails/formDetails';
import { AlertController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    public objects = [];
    public numForms;
    public formsArray;
    constructor(public navCtrl: NavController, public http: HTTP, public events: Events, private storage: Storage, public alertCtrl: AlertController) {

    }

    ionViewDidLoad() {
      let url = "https://hidden-depths-27519.herokuapp.com/";
      this.http.post(url + 'getAllForms', {}, {})
      .then(response => {
        let temp = JSON.parse(response.data);
        this.formsArray = temp;
      })
    }

    addForm() {
        this.navCtrl.push(FormPage);
    }

    viewForm(clickedForm) {
        this.storage.set('ClickedForm', JSON.stringify(clickedForm));
        this.navCtrl.push(FormDetailsPage);

    }

    initializeNames() {

    }

    getItems(ev: any) {
        this.initializeNames();

        let val = ev.target.value;

        if (val && val.trim() != '') {

        }
    }
}
