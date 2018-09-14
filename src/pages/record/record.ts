import { Component } from '@angular/core';
import { NavController, ToastController, AlertController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { IssuesrecordProvider } from '../../providers/issuesrecord/issuesrecord';

@Component({
  selector: 'page-record',
  templateUrl: 'record.html',
})
export class RecordPage {
  private issueRecord : FormGroup;
  client: any;
  clientRooms: any;
  issues: any;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public toastCtrl: ToastController, public issuesRecordService: IssuesrecordProvider, public alertCtrl: AlertController, private clientService: ClientService) { 
    this.client = this.clientService.getClient();
    this.issues = new Array();
    this.clientRooms = this.client.rooms.map(a => a.name);
    this.issueRecord = this.formBuilder.group({
      date: [''],
      room: ['', Validators.required]
    })
  }

  presentToast(position: string) {
    const toast = this.toastCtrl.create({
      message: 'Issue was added successfully',
      duration: 3000,
      position: position
    });
    toast.present();
  }

  setIssue(issue) {
    this.issues.indexOf(issue) === -1 ?  this.issues.push(issue) :  this.issues;
    console.log('to submit', this.issueRecord);
  }

  submitInfo() {
    console.log('to submit', this.issueRecord.value);
    let submittedRecord = {
      name: this.client.name, 
      date: this.issueRecord.value.date,
      room: {
        name: this.issueRecord.value.room,
        issues: this.issues
      }
    }

    console.log(submittedRecord);
    //this.issuesRecordService.createIssueRecord(submittedRecord);
    this.issueRecord.reset()
    this.presentToast('middle');
  }
}
