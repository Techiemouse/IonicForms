import { Component } from '@angular/core';

import { IssuesPage } from '../issues/issues';
import { ContactPage } from '../contact/contact';
import { RecordPage } from '../record/record';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RecordPage;
  tab2Root = IssuesPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
