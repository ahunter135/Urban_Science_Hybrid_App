import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { camera } from '@ionic-native';

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
    manBrand = '';
	marketName = '';
	franchiseBrand = '';
	dealershipAddress1 = '';
	dealershipAddress2 = '';
	dealershipCity = '';
	dealershipState = '';
	dealershipZip = '';
	dealershipExclusivity = '';
	dealershipAppearance = '';
	dealershipSignage = '';
	dealershipCustomerParking = '';
	dealershipAccessibility = '';
	dealershipLocation = '';
	dealershipProximity = '';
	dealershipNeighborhood = '';
	dealershipSize = '';
	dealershipImage = '';
	dealershipBuildingType = '';
	dealershipCongestion = '';
	dealershipDeliveryArea = '';
	dealershipUsedCars = '';
	dealershipAdditionStorage = '';
	dealershipStructureSize = '';
	dealershipOffSite = '';
	dealershipPole = '';
	dealershipMonument = '';
	dealershipServiceReception = '';
	dealershipLanes = '';
	dealershipType = '';
	dealershipStalls = '';
	dealershipCarWash = '';
	dealershipLubeLane = '';
	dealershipCollision = '';
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
