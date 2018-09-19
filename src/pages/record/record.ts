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
  searchValue: any;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public toastCtrl: ToastController, public issuesRecordService: IssuesrecordProvider, public alertCtrl: AlertController, private clientService: ClientService) { 
    this.client = this.clientService.getClient();
    this.searchValue='';
    this.issues = new Array();
    this.clientRooms = this.client.rooms.map(a => a.name);
    this.issueRecord = this.formBuilder.group({
      date: [''],
      room: ['', Validators.required],
      issue: ['']
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
    this.issueRecord.patchValue({issue: ''});
    }

  submitInfo() {
    let submittedRecord = {
      name: this.client.name, 
      date: this.issueRecord.value.date,
      room: [{
        name: this.issueRecord.value.room,
        issues: this.issues
      }]
    }

    this.issuesRecordService.updateIssueRecord(submittedRecord);
    this.issueRecord.reset()
    this.issues = []
    this.presentToast('middle');
  }
}
