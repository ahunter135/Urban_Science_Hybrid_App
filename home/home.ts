import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { Storage } from '@ionic/storage';


import { FormPage } from '../Form Page/form';
import { ListPage } from '../list/list'

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
            let form = {
                 pmaName: "",
                  manufacturerBrand: "",
                  markeyName: "",
                  franchiseBrand: "",
                  address: "",
                  attribute: {
                    photoTaken: {
                      lat: "",
                      long: "",
                    },
                    exclusivity: "",
                    appearance: "",
                    signage: "",
                    customerParking: "",
                    accessibility: "",
                    location: "",
                    proxToComp: "",
                    surroundingNeighbor: ""
                  },
                  facility: {
                    overallSize: "",
                    meetsImage: "",
                    buildingType: "",
                    congestion: "",
                    newCarDeliveryArea: "",
                    usedCarsSepBldg: "",
                    addVehicalStorage: "",
                    structureSize: "",
                    offSiteAreas: ""
                  },
                  brandSigns: {
                    pylanPole: "",
                    monument: ""
                  },
                  fixedOps: {
                    serviceReception: "",
                    servRecptArea: "",
                    serviceShopType: "",
                    servShopStalls: "",
                    carWash: "",
                    expressLubeLane: "",
                    collisionShop: ""
                  }

            */

            let formTab = {
                name: "Team 1001",
                location: "City, State",
                GPS: 123456,
                photo: "https://cdn1.iconfinder.com/data/icons/transportation-5/24/Car-2-512.png"
            }

            this.forms.push(formTab);
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