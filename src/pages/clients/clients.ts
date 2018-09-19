import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClientService } from '../../services/client.service';
import { TabsPage } from '../../pages/tabs/tabs';

@Component({
  selector: 'page-clients',
  templateUrl: 'clients.html',
})
export class ClientPage {
  rooms: any[];
  clients: any[];

  constructor(public navCtrl: NavController, private clientService: ClientService) { 
    this.clientService.getClientList((clients) => {
      //TODO get client name and send that instead of id to db
        this.clients = clients;
    });
  }
  clientSelected(client) {
    this.clientService.setClient(client)
    this.navCtrl.push(TabsPage);
  }
}
