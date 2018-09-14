import { Component } from '@angular/core';
import { NavController, ToastController, AlertController } from 'ionic-angular';
import { ClientService } from '../../app/client.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IonicformsProvider } from '../../providers/ionicforms/ionicforms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:  [ ClientService ],
})
export class HomePage {
  private event : FormGroup;
  rooms: any[];
  clients: any[];

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private clientService: ClientService, public toastCtrl: ToastController, public ionicFormsService: IonicformsProvider, public alertCtrl: AlertController) { 
    this.clients = [1, 2, 3];
    this.event = this.formBuilder.group({
      name: ['', Validators.required],
      date: [''],
      client: ['', Validators.required],
      room: [null]
    })
  }
  getRooms(clientId:any):any {
    if (typeof(clientId) === "object") {
      return;
    } 
    this.clientService.getClient(clientId, (client) => {
      //TODO get client name and send that instead of id to db
        this.rooms = client.rooms;
    });
  }

  presentToast(position: string) {
    const toast = this.toastCtrl.create({
      message: 'Event was added successfully',
      duration: 3000,
      position: position
    });
    toast.present();
  }

  submitInfo() {
    this.ionicFormsService.createIonicForm(this.event.value);
    this.event.reset()
    this.rooms=null;
    this.presentToast('middle');
  }
}
