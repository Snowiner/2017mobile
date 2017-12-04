import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the ParkAuthsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-park-auths',
  templateUrl: 'park-auths.html',
})
export class ParkAuthsPage {
  id;

  //searching
  searchQuery: string = '';
  people: Array<any> =[];
  loadedPeople: Array<any>;
  peopleRef;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl:AlertController) {
    this.id = navParams.get('id');
    this.peopleRef = firebase.database().ref('/userProfile');
  }

  ionViewDidLoad() {
    this.peopleRef.on('value', data=>{
      let tmp = [];
      data.forEach(data => {
        tmp.push({
          key: data.key,
          email: data.val().email
        })      
      });
    this.people = tmp;
    this.loadedPeople = tmp;
    });
  }

  authSelect(thePerson){
    let db = firebase.database().ref('/parks/').child(this.id);
    
    let alert = this.alertCtrl.create({
      title:'권한 부여하기',
      subTitle:thePerson.email,
      buttons:[
        
        {
          text:'매니저',
          handler:()=>{
            db.child('managers').push(thePerson);
          }
        },
        {
          text:'현장관리자',
          handler:()=>{
            db.child('checkers').push(thePerson);
          }
        },
        {
          text:'취소',
          role:'cancel'
        }
      ]
    });
    alert.present();
  }

  initializeUsers(){
    this.people = this.loadedPeople;
  }

  getUsers(event){
    this.initializeUsers();
    let queryString = event.target.value;


    if(queryString !== undefined){
      if(queryString.trim() == '') { return; }

      this.people = this.people.filter((v) => {
        if(v.email && queryString){
          if(v.email.toLowerCase().indexOf(queryString.toLowerCase()) > -1){
              return true;
          }
          return false;
        }
      });
    }
  }

  customHeaderFn(record, recordIndex, records){
    if(recordIndex > 0){
      if( record.people !== records[recordIndex-1].people){
                       return record.people;
      }else{
           return null;
     }
    }else{
         return record.people;
    }
   }

}
