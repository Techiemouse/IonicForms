import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicformsProvider } from '../../providers/ionicforms/ionicforms'


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  ionicForms: any;
  constructor(public navCtrl: NavController, public ionicFormsService: IonicformsProvider) {
  }

  ionViewCanEnter(){
    console.log('aaaaaaa ', this.ionicForms)
    this.ionicFormsService.getIonicForms().then((data) => {
      console.log('data ', data)
      this.ionicForms = data;
    });
 console.log('forms from db ', this.ionicForms)
  }

}
