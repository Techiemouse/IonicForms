import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IssuesPage } from '../pages/issues/issues';
import { ClientPage } from '../pages/clients/clients';
import { ContactPage } from '../pages/contact/contact';
import { RecordPage } from '../pages/record/record';
import { TabsPage } from '../pages/tabs/tabs';
import { ClientService } from '../services/client.service';
import { DatePicker } from '@ionic-native/date-picker';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IssuesrecordProvider } from '../providers/issuesrecord/issuesrecord';


@NgModule({
  declarations: [
    MyApp,
    IssuesPage,
    ContactPage,
    RecordPage,
    TabsPage,
    ClientPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IssuesPage,
    ContactPage,
    RecordPage,
    TabsPage,
    ClientPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    IssuesrecordProvider,
    ClientService
  ]
})
export class AppModule {}
