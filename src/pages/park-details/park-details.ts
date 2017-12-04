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
  //parkDetailRef;toggle;
  //detail: Array<Object> = [];
  tog: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af:AngularFireDatabase, public dialogs: Dialogs) {
  
    this.check = navParams.data.parkData;
    this.key = navParams.data.parkData.key;
//    this.parkDetailRef = firebase.database().ref('/parks/'+this.key);
    this.tog = af.list('/parks/'+this.key+'/detail/');
  }

  ionViewDidLoad() {
    /*
    this.parkDetailRef.child('detail').on('value', data=>{
      data.forEach(data => {
       this.detail.push({
          carnum: data.val().carnum,
          toggle: data.val().toggle,
          id: data.val().id})      
    }); 
   });
   */
  }
  
  toggleButton(toggles:any){
    
    //window.alert( toggles.toggle);

      firebase.database().ref('/parks/'+this.key+'/detail/'+toggles.id+'/')
      .update({carnum:toggles.carnum , toggle: !toggles.toggle});
    //   this.toggle.on('value', data=>{
  //     data.forEach(data => {
  //      if(data.val().carnum == details.carnum){
  //        this.toggle.update(details,{carnum:details.carnum , toggle:!details.toggle});
  //      }
       
      
  //   }); 
  //  });
  
  }

  manage(){
    var user = firebase.auth().currentUser;
    var db = firebase.database().ref('/parks/'+this.key+'/managers');
    var navCtrl = this.navCtrl;
    var key = this.key;
    db.orderByChild('key')
    .equalTo(user.uid)
    .once('value', function(snapshot){
      if(snapshot.exists())
      {
        navCtrl.push(ParkAuthsPage,{id:key});
      }
      else
      {
        window.alert('unauthorized access');
      }
    })

    
  }

  ifAuth(){
    var user = firebase.auth().currentUser;
    const valid = firebase.database().ref(`/parks/`+this.key+'/manager/');
    
  }


}