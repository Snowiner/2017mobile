import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { Dialogs } from '@ionic-native/dialogs';
import * as firebase from 'firebase';
import { ParkAuthsPage } from '../park-auths/park-auths';

/**
 * Generated class for the ParkDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-park-details',
  templateUrl: 'park-details.html',
})
export class ParkDetailsPage {
  check: Object;
  key: any;
  parkDetailRef;
  detail: Array<Object> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public af:AngularFireDatabase, public dialogs: Dialogs) {
  
    this.check = navParams.data.parkData;
    this.key = navParams.data.parkData.key;
    this.parkDetailRef = firebase.database().ref('/parks/'+this.key);
  }

  ionViewDidLoad() {
    this.parkDetailRef.child('detail').on('value', data=>{
      data.forEach(data => {
       this.detail.push({
          carnum: data.val().carnum,
          toggle: data.val().toggle})      
    }); 
   });
  }

  manage(){
    this.navCtrl.push(ParkAuthsPage,{id:this.key});
  }

  toggleButton(carnum: any, toggle: any){
    /*
    if(toggle === 'true'){
      this.parkDetailRef.child('detail').update(this.detail, {toggle: 'false'});

    }*/
   /*
    this.parkDetailRef.child('detail').on('value', data=>{
        if(data.val().carnum.equalTo(carnum)){
          if(toggle == 'false'){
          data.update('',{carnum: carnum, toggle: 'true'});
          }
     
          if(toggle == 'true'){
            data.update('',{carnum: carnum, toggle: 'true'});
            
          }
        }
       });
*/
    /*
    this.parkDetailRef.child('detail').on('value', data=>{
      data.equalTo(carnum).update({carnum: carnum, toggle: 'true'});
    }); */  
  }
}
