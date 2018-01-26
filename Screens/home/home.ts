import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { Storage } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';


import { FormPage } from '../form/form';
import { FormDetailsPage } from '../formDetails/formDetails';
import { AlertController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    public objects = [];
    public forms = [];
    public numForms;
    public base64Image;
    public items;
    constructor(public navCtrl: NavController, public http: HTTP, private storage: Storage, public camera: Camera, public alertCtrl: AlertController) {

    }

    ionViewDidLoad() {
      this.numForms = 4;
      this.storage.set('LoggedIn', false);
      this.storage.get('LoggedIn').then((loggedIn) => {
        if (loggedIn == false || loggedIn == undefined) {
          let alertPrompt = this.alertCtrl.create({
            title: 'Login',
            inputs: [
              {
                name: 'username',
                placeholder: 'Username'
              },
              {
                name: 'password',
                placeholder: 'Password',
                type: 'password'
              }
            ],
            buttons: [
              {
                text: 'Cancel',
                role: 'cancel',
                handler: data => {
                  console.log('Cancel clicked');
                }
              },
              {
                text: 'Login',
                handler: data => {
                  let loginData = {
                    username: data.username,
                    password: data.password
                  };
                  let url = "https://hidden-depths-27519.herokuapp.com/";

                  this.http.post(url + "login", loginData, {})
                    .then(response => {
                      if (response.data === "Success") {
                        this.storage.set('LoggedIn', true);
                        //getAllForms
                        this.http.post(url + 'getAllForms', {}, {})
                        .then(response => {
                          alert(JSON.stringify(response));
                        })
                      }
                    })
                    .catch(err => alert(JSON.stringify(err)));
                }
              }
            ]
          });
          alertPrompt.present();
        } else {
          let url = "https://hidden-depths-27519.herokuapp.com/";
          this.http.post(url + 'getAllForms', {}, {})
          .then(response => {
            alert(JSON.stringify(response));
          })
        }
      })

/*
        //need to set the number of forms from server
        this.numForms = 5;

        //load the forms to array 'forms'
        for (var i = 0; i < this.numForms; i++) {


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
        */
    }


    addForm() {
        this.navCtrl.push(FormPage);
    }


    showForm(showMe) {
        //showMe should be an ItemsDetailPage
        this.storage.set('ClickedForm', JSON.stringify(showMe));
        this.navCtrl.push(FormDetailsPage);//push the form clicked

    }

    initializeNames() {
        this.items = [];
        for (var t = 0; t < this.objects.length; t++) {
            this.items.push(this.objects[t].title);
        }
    }

    getItems(ev: any) {
        this.initializeNames();

        let val = ev.target.value;

        if (val && val.trim() != '') {
            this.items = this.items.filter((item) => {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }

    takePicture() {
        this.camera.getPicture({
            quality: 75,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            saveToPhotoAlbum: false
        }).then(imageData => {
            this.base64Image = "data:image/jpeg;base64," + imageData;
        }, error => {
            alert("Error -> " + JSON.stringify(error));
            console.log("ERROR -> " + JSON.stringify(error));
        });

    }
}
