import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Dialogs } from '@ionic-native/dialogs';
import * as firebase from 'firebase';


export class Result {
  장소: string;
  개수: number;
}
@IonicPage()
@Component({
  selector: 'page-park-analysis',
  templateUrl: 'park-analysis.html',
})
export class ParkAnalysisPage {

  anal;
  Day: Array<any> = [];
  Time: Array<any> = [];
  result: Array<any> = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {

    this.anal = firebase.database().ref('/analysis/');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParkAnalysisPage');
  }
  day_anal(day) {

    this.anal.on('value', data => {
      data.forEach(data => {

        if (data.val().요일 == day) {
          this.Day.push(
            data.val().장소
          );
        }

      });
    });
     
      var cnt = 0;
      var set = new Set(this.Day);
      
      set.forEach(set=>{
        
        for( var i =0;i<this.Day.length ; i++){
          if(set == this.Day[i]){
            cnt++;
          }
                  
         }
         this.result.push({장소:set,개수:cnt});
         cnt = 0;


      });
    
      var max_arr = [];
      var max_cnt = 0;
      var final_result;

      for( var i =0;i<this.result.length ; i++){
           max_arr[i] = this.result[i].개수;
       }
       max_cnt = Math.max.apply(null, max_arr);
      
       
       
       for( var i =0;i<this.result.length ; i++){
        if(this.result[i].개수 == max_cnt){
            final_result = this.result[i].장소;
        }
       }

      window.alert(day+"요일, 가장 바쁜 주차장은"+final_result+"입니다.");
      
      
      
      //  function sortNumberDesc(a, b){ return b - a; } 
      //  this.result.sort(sortNumberDesc);

      //  window.alert(this.result[0].);
   
      this.Day= [];
      this.result = [];
  }
  time_anal(time) {
    if( time == "AM 0:00 ~ AM 6:00"){
      this.anal.on('value', data => {
        data.forEach(data => {
  
        
          
          if ((0 <= data.val().시간) && (data.val().시간 <= 6)) {
           
            
            this.Time.push(
              data.val().장소
            );
          }
  
        });
      });

      var cnt = 0;
      var set = new Set(this.Time);
      
      set.forEach(set=>{
        
        for( var i =0;i<this.Time.length ; i++){
          if(set == this.Time[i]){
            cnt++;
          }
                  
         }
         this.result.push({장소:set,개수:cnt});
         cnt = 0;


      });
    
      var max_arr = [];
      var max_cnt = 0;
      var final_result;

      for( var i =0;i<this.result.length ; i++){
           max_arr[i] = this.result[i].개수;
       }
       max_cnt = Math.max.apply(null, max_arr);
      
       
       
       for( var i =0;i<this.result.length ; i++){
        if(this.result[i].개수 == max_cnt){
            final_result = this.result[i].장소;
        }
       }

      window.alert("AM 0:00 ~ AM 6:00, 가장 바쁜 주차장은"+final_result+"입니다.");
      this.Time= [];
      this.result = [];
    }

    if( time == "AM 6:00 ~ PM 12:00"){
      this.anal.on('value', data => {
        data.forEach(data => {
  
        
          
          if ((6 <= data.val().시간) && (data.val().시간 <= 12)) {
            this.Time.push(
              data.val().장소
            );
          }
  
        });
      });

      var cnt = 0;
      var set = new Set(this.Time);
      
      set.forEach(set=>{
        
        for( var i =0;i<this.Time.length ; i++){
          if(set == this.Time[i]){
            cnt++;
          }
                  
         }
         this.result.push({장소:set,개수:cnt});
         cnt = 0;


      });
    
      var max_arr = [];
      var max_cnt = 0;
      var final_result;

      for( var i =0;i<this.result.length ; i++){
           max_arr[i] = this.result[i].개수;
       }
       max_cnt = Math.max.apply(null, max_arr);
      
       
       
       for( var i =0;i<this.result.length ; i++){
        if(this.result[i].개수 == max_cnt){
            final_result = this.result[i].장소;
        }
       }

      window.alert("AM 6:00 ~ PM 12:00, 가장 바쁜 주차장은"+final_result+"입니다.");
      this.Time= [];
      this.result = [];
    }

    if( time == "PM 12:00 ~ PM 6:00"){
      this.anal.on('value', data => {
        data.forEach(data => {
  
        
          
          if ((12 <= data.val().시간) && (data.val().시간 <= 18)) {
            this.Time.push(
              data.val().장소
            );
          }
  
        });
      });

      var cnt = 0;
      var set = new Set(this.Time);
      
      set.forEach(set=>{
        
        for( var i =0;i<this.Time.length ; i++){
          if(set == this.Time[i]){
            cnt++;
          }
                  
         }
         this.result.push({장소:set,개수:cnt});
         cnt = 0;


      });
    
      var max_arr = [];
      var max_cnt = 0;
      var final_result;

      for( var i =0;i<this.result.length ; i++){
           max_arr[i] = this.result[i].개수;
       }
       max_cnt = Math.max.apply(null, max_arr);
      
       
       
       for( var i =0;i<this.result.length ; i++){
        if(this.result[i].개수 == max_cnt){
            final_result = this.result[i].장소;
        }
       }

      window.alert("PM 12:00 ~ PM 6:00, 가장 바쁜 주차장은"+final_result+"입니다.");
      this.Time= [];
      this.result = [];
    }

    if( time == "PM 6:00 ~ AM 0:00"){
      this.anal.on('value', data => {
        data.forEach(data => {
  
        
          
          if ((18 <= data.val().시간) && (data.val().시간 <= 24)) {
            this.Time.push(
              data.val().장소
            );
          }
  
        });
      });

      var cnt = 0;
      var set = new Set(this.Time);
      
      set.forEach(set=>{
        
        for( var i =0;i<this.Time.length ; i++){
          if(set == this.Time[i]){
            cnt++;
          }
                  
         }
         this.result.push({장소:set,개수:cnt});
         cnt = 0;


      });
    
      var max_arr = [];
      var max_cnt = 0;
      var final_result;

      for( var i =0;i<this.result.length ; i++){
           max_arr[i] = this.result[i].개수;
       }
       max_cnt = Math.max.apply(null, max_arr);
      
       
       
       for( var i =0;i<this.result.length ; i++){
        if(this.result[i].개수 == max_cnt){
            final_result = this.result[i].장소;
        }
       }

      window.alert("PM 6:00 ~ AM 0:00, 가장 바쁜 주차장은"+final_result+"입니다.");
      this.Time= [];
      this.result = [];
    }
  }
}
