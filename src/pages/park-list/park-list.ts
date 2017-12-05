import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { Park } from './park';
import { Dialogs } from '@ionic-native/dialogs';
import { ParkRegisterPage } from '../park-register/park-register';
import { ParkAnalysisPage } from '../park-analysis/park-analysis';

/*
  Generated class for the ParkList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-park-list',
  templateUrl: 'park-list.html'
})
export class ParkListPage {
  parks: FirebaseListObservable<any[]>;
  searchQuery: string = '';
  do: Array<any> =[];
  loadedDo: Array<any>;
  doRef;
  ifMaster: boolean;
  check: any[] = [];
  constructor(public navCtrl: NavController) {

  this.ifAuth();
  this.doRef = firebase.database().ref('/parks');
   
   }

  addPark(){ //ParkRegisterPage로 넘어가는 함수.
    this.navCtrl.push(ParkRegisterPage);
  }
  analysis(){ //통계페이지로 넘어가는 함수////////
    this.navCtrl.push(ParkAnalysisPage);
  }

  goParkDetails(theParkData){
    this.navCtrl.push("ParkDetailsPage", { parkData: theParkData });
  }

  ionViewDidLoad() {
    this.doRef.on('value', data=>{
      let tmp = [];
      data.forEach(data => {
        tmp.push({
          key: data.key,
          do: data.val().doo,
          si: data.val().si,
          place: data.val().place})      
      });
    this.do = tmp;
    this.loadedDo = tmp;
    });

  }
  
  initializeParks(){
    this.do = this.loadedDo;
  }

  getParks(event){
    this.initializeParks();
    let queryString = event.target.value;


    if(queryString !== undefined){
      if(queryString.trim() == '') { return; }

      this.do = this.do.filter((v) => {
        if(v.place && queryString){
          if(v.place.toLowerCase().indexOf(queryString.toLowerCase()) > -1){
              return true;
          }
          return false;
        }
      });
    }
  }

  resetList(event){
    this.initializeParks();
  }

   customHeaderFn(record, recordIndex, records){
     if(recordIndex > 0){
       if( record.do !== records[recordIndex-1].do){
                        return record.do;
       }else{
            return null;
      }
     }else{
          return record.do;
     }
    }

    ifAuth(){
      var user = firebase.auth().currentUser;
      var valid = firebase.database().ref(`/master/`);
      var check  = this.check;

      valid.orderByChild('key')
      .equalTo(user.uid)
      .once('value',
        function(snapshot)
        {
          if(snapshot.exists())
          {
            check.push(true);
          }
          else{
            check.push(false);
          }
        });
        this.check = check;
        }

       /*

        sample(check)
        {
          if(check[0])
          {
            this.ifMaster = true;
            window.alert('2');
            return true;
          }
          else
          {
            this.ifMaster = false;
            return false;
          }
        }
      */
    }

    

