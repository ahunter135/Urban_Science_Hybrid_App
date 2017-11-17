import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { Storage } from '@ionic/storage';


import { FormPage } from '../form/form';
import { ListPage } from '../list/list';



@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    public objects = [];
    public forms = [];
    public numForms;

    constructor(public navCtrl: NavController, public http: HTTP, private storage: Storage) {

    }

    ionViewDidLoad() {

        //this.http.post('SOMEURL:8005/getForms')

        //need to set the number of forms from server
        this.numForms = 5;

        //load the forms to array 'forms'
        for (var i = 0; i < this.numForms; i++) {

            /*
            *grab from server here
            */
            let form = {
                name: "Team 1001",
                location: "City, State",
                GPS: 123456,
                photo: "https://pbs.twimg.com/media/C_k0Tr-UAAAttbv.jpg"
            }

            this.forms.push(form);
        }

        for (var h = 0; h < this.forms.length; h++) {
            let item = {
                photo: this.forms[h].photo,
                title: (h+1) + ". " + this.forms[h].name,
                subtitle: this.forms[h].location
            }
            this.objects.push(item);
        }
    }

    openList() {

        this.navCtrl.push(ListPage);
    }


    addForm() {

        this.navCtrl.push(FormPage);
    }


    showForm(showMe) {
        //showMe should be an ItemsDetailPage
        this.navCtrl.push(showMe);//push the form clicked

    }
}