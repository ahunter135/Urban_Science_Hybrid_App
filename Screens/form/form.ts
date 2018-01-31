import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

import { HTTP } from '@ionic-native/http';
import { Camera } from '@ionic-native/camera';



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
    manBrand: '',
    marketName:  '',
    franchiseBrand:  '',
    dealershipAddress1:  '',
    dealershipAddress2: '',
    dealershipCity : '',
    dealershipState : '',
    dealershipZip : '',
    dealershipExclusivity : '',
    dealershipAppearance : '',
    dealershipSignage : '',
    dealershipCustomerParking : '',
    dealershipAccessibility : '',
    dealershipLocation : '',
    dealershipProximity : '',
    dealershipNeighborhood : '',
    dealershipSize : '',
    dealershipImage : '',
    dealershipBuildingType : '',
    dealershipCongestion : '',
    dealershipDeliveryArea : '',
    dealershipUsedCars : '',
    dealershipAdditionStorage : '',
    dealershipStructureSize : '',
    dealershipOffSite : '',
    dealershipPole : '',
    dealershipMonument : '',
    dealershipServiceReception : '',
    dealershipLanes : '',
    dealershipType : '',
    dealershipStalls : '',
    dealershipCarWash : '',
    dealershipLubeLane : '',
    dealershipCollision : '',
    formImage: ''
  };
  public base64Image;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HTTP, public camera: Camera, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('');
  }

  submit() {
    //make http call here to /submitForm
    let url = "https://hidden-depths-27519.herokuapp.com/";
    this.http.setHeader('Content-Type', 'application/json');
    this.http.setDataSerializer('json');
    this.http.post(url + 'submitForm', {
      form: this.form
    }, {})
      .then(response => {
        //if response is good.
        this.navCtrl.setRoot(HomePage);
      })
      .catch(error => console.log(error));
  }

  cancel() {
    this.navCtrl.setRoot(HomePage);
  }

  takePicture() {
    this.camera.getPicture({
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 300,
      targetHeight: 300,
      saveToPhotoAlbum: false
    }).then(imageData => {
      this.form.formImage = "data:image/jpeg;base64," + imageData;
    }, error => {
      alert("Error -> " + JSON.stringify(error));
      console.log("ERROR -> " + JSON.stringify(error));
    });

  }

}
