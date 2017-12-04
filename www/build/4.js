webpackJsonp([4],{

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkDetailsPageModule", function() { return ParkDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__park_details__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ParkDetailsPageModule = (function () {
    function ParkDetailsPageModule() {
    }
    ParkDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__park_details__["a" /* ParkDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__park_details__["a" /* ParkDetailsPage */]),
            ],
        })
    ], ParkDetailsPageModule);
    return ParkDetailsPageModule;
}());

//# sourceMappingURL=park-details.module.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParkDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_dialogs__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__park_auths_park_auths__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ParkDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ParkDetailsPage = (function () {
    /*
      constructor(public navCtrl: NavController, public navParams: NavParams, public af:AngularFireDatabase, public dialogs: Dialogs) {
      
        this.check = navParams.data.parkData;
        this.key = navParams.data.parkData.key;
    //    this.parkDetailRef = firebase.database().ref('/parks/'+this.key);
        this.tog = af.list('/parks/'+this.key+'/detail/');
     //   this.tog2 = firebase.database().ref(`/parks/${this.key}/detail/`);
        this.ifAuth();
        this.ifChecker();
    //    window.alert(this.auth);
      }*/
    function ParkDetailsPage(navCtrl, navParams, af, dialogs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.af = af;
        this.dialogs = dialogs;
        this.check = navParams.data.parkData;
        this.key = navParams.data.parkData.key;
        //    this.parkDetailRef = firebase.database().ref('/parks/'+this.key);
        this.tog = af.list('/parks/' + this.key + '/detail/');
        this.ifAuth();
        this.ifChecker();
    }
    ParkDetailsPage.prototype.ionViewDidLoad = function () {
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
    };
    ParkDetailsPage.prototype.toggleButton = function (toggles) {
        //window.alert( toggles.toggle);
        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/parks/' + this.key + '/detail/' + toggles.id + '/')
            .update({ carnum: toggles.carnum, toggle: !toggles.toggle });
        //   this.toggle.on('value', data=>{
        //     data.forEach(data => {
        //      if(data.val().carnum == details.carnum){
        //        this.toggle.update(details,{carnum:details.carnum , toggle:!details.toggle});
        //      }
        //   }); 
        //  });
    };
    ParkDetailsPage.prototype.manage = function () {
        var user = __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser;
        var db = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/parks/' + this.key + '/managers');
        var navCtrl = this.navCtrl;
        var key = this.key;
        db.orderByChild('key')
            .equalTo(user.uid)
            .once('value', function (snapshot) {
            if (snapshot.exists()) {
                navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__park_auths_park_auths__["a" /* ParkAuthsPage */], { id: key });
            }
            else {
                //     window.alert('unauthorized access');
            }
        });
    };
    ParkDetailsPage.prototype.ifAuth = function () {
        var user = __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser;
        var key = this.key;
        var valid = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref("/parks/" + key + "/managers/");
        var check = [];
        valid.orderByChild('key')
            .equalTo(user.uid)
            .once('value', function (snapshot) {
            if (snapshot.exists()) {
                check.push(true);
            }
            else {
                check.push(false);
            }
        });
        if (check[0]) {
            this.auth = true;
            return true;
        }
        else {
            this.auth = false;
            return false;
        }
    };
    ParkDetailsPage.prototype.ifChecker = function () {
        var user = __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser;
        var key = this.key;
        var valid = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref("/parks/" + key + "/checkers/");
        var check = [];
        valid.orderByChild('key')
            .equalTo(user.uid)
            .once('value', function (snapshot) {
            if (snapshot.exists()) {
                check.push(true);
            }
            else {
                check.push(false);
            }
        });
        if (check[0]) {
            this.checker = true;
            return true;
        }
        else {
            this.checker = false;
            return false;
        }
    };
    ParkDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-park-details',template:/*ion-inline-start:"D:\dev\mobileProject\dev2\1204\src\pages\park-details\park-details.html"*/`<!--\n\n  Generated template for the ParkDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n    <ion-navbar color="primary">\n\n      <ion-title>Parking Info</ion-title>\n\n\n\n      <ion-buttons end>\n\n        <div *ngIf="auth">\n\n          <button ion-button icon-left (click) = "manage()"> 주차장 권한 </button>\n\n        </div>\n\n      </ion-buttons>\n\n\n\n    </ion-navbar>\n\n    \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content>\n\n    <h1 padding>{{check.place}}</h1>\n\n    \n\n    <ion-list >\n\n      <ion-item *ngFor = "let toggles of tog | async">\n\n        <ion-label *ngIf="toggles.toggle || checker">{{toggles.carnum}}</ion-label>\n\n        <ion-toggle *ngIf="checker" value="foo" checked={{toggles.toggle}} (ionChange) = "toggleButton(toggles)"></ion-toggle>\n\n        \n\n      </ion-item>\n\n    </ion-list>\n\n    <!-- <ion-list>\n\n      <ion-item *ngFor = "let toggles of tog | async">\n\n        <ion-label>{{toggles.carnum}}</ion-label>\n\n         \n\n      </ion-item>\n\n    </ion-list> -->\n\n\n\n  </ion-content>`/*ion-inline-end:"D:\dev\mobileProject\dev2\1204\src\pages\park-details\park-details.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_dialogs__["a" /* Dialogs */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_dialogs__["a" /* Dialogs */]) === "function" && _d || Object])
    ], ParkDetailsPage);
    return ParkDetailsPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=park-details.js.map

/***/ })

});
//# sourceMappingURL=4.js.map