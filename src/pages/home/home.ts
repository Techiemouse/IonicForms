import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ClientService } from '../../app/client.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:  [ ClientService ],
})
export class HomePage {
  private event : FormGroup;
  rooms: any[];
  clients: any[];

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private clientService: ClientService, public toastCtrl: ToastController) { 
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
      this.presentToast('top');
      return;
    } 
    console.log('passthe check', clientId )
    this.clientService.getClient(clientId, (client) => {
      console.log('clientid', clientId )
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
  clickOk(event) {
    console.log("clickOk---",event, this.event)
  }

  submitInfo(event) {

    this.event.reset()
    console.log('++++submit++ ', this.rooms);
    this.rooms=null;
    this.presentToast('middle');
  }
}
