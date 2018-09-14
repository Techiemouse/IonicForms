
import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';

/*
  Generated class for the IonicformsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IonicformsProvider {

  data: any;
  db: any;
  remote: any;
 
  constructor() {
 
    this.db = new PouchDB('ionicforms');
 
    this.remote = 'http://localhost:5984/ionicforms';
 
    let options = {
      live: true,
      retry: true,
      continuous: true
    };
 
    this.db.sync(this.remote, options);
 
  }
 
  getIonicForms() {
    if (this.data) {
      console.log('hey',this.data);
        return Promise.resolve(this.data);
      }
     
      return new Promise(resolve => {
        console.log('hey2',this.data);
        this.db.allDocs({
     
          include_docs: true
     
        }).then((result) => {
     
          this.data = [];
     
          let docs = result.rows.map((row) => {
            this.data.push(row.doc);
          });
     
          resolve(this.data);
     
          this.db.changes({live: true, since: 'now', include_docs: true}).on('change', (change) => {
            this.handleChange(change);
          });
     
        }).catch((error) => {
          console.log('hey3',this.data);
          console.log(error);
     
        });
     
      });
     
  }
 
  createIonicForm(ionicForm){
    console.log('++++posting to db++ ', ionicForm);
    this.db.post(ionicForm);
  }
 
  updateIonicForm(ionicForm){
    this.db.put(ionicForm).catch((err) => {
        console.log(err);
      });
  }
 
  deleteIonicForm(ionicForm){
    this.db.remove(ionicForm).catch((err) => {
        console.log(err);
      });
  }
 
  handleChange(change){
    let changedDoc = null;
    let changedIndex = null;
   
    this.data.forEach((doc, index) => {
   
      if(doc._id === change.id){
        changedDoc = doc;
        changedIndex = index;
      }
   
    });
   
    //A document was deleted
    if(change.deleted){
      this.data.splice(changedIndex, 1);
    }
    else {
   
      //A document was updated
      if(changedDoc){
        this.data[changedIndex] = change.doc;
      }
   
      //A document was added
      else {
        this.data.push(change.doc);
      }
   
    }
  }

}
