import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IssuesrecordProvider } from '../../providers/issuesrecord/issuesrecord';


@Component({
  selector: 'page-issues',
  templateUrl: 'issues.html'
})
export class IssuesPage {
  issuesRecords: any;
  constructor(public navCtrl: NavController, public issuesRecordService: IssuesrecordProvider) {
  }

  ionViewCanEnter(){
    console.log('aaaaaaa ', this.issuesRecords)
    this.issuesRecordService.getIssues().then((data) => {
      console.log('data ', data)
      this.issuesRecords = data;
    });
 console.log('forms from db ', this.issuesRecords)
  }

}
