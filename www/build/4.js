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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_dialogs__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(38);
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
    function ParkDetailsPage(navCtrl, navParams, af, dialogs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.af = af;
        this.dialogs = dialogs;
        this.detail = [];
        this.check = navParams.data.parkData;
        this.key = navParams.data.parkData.key;
        this.parkDetailRef = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/parks/' + this.key);
    }
    ParkDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.parkDetailRef.child('detail').on('value', function (data) {
            data.forEach(function (data) {
                _this.detail.push({
                    carnum: data.val().carnum,
                    toggle: data.val().toggle
                });
            });
        });
    };
    ParkDetailsPage.prototype.manage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__park_auths_park_auths__["a" /* ParkAuthsPage */], { id: this.key });
    };
    ParkDetailsPage.prototype.toggleButton = function (carnum, toggle) {
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
    };
    ParkDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-park-details',template:/*ion-inline-start:"D:\dev\mobileProject\dev2\1204\src\pages\park-details\park-details.html"*/`<!--\n\n  Generated template for the ParkDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Parking Info</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <div>\n\n        <button ion-button icon-left (click) = "manage()"> 주차장 권한 </button>\n\n      </div>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <h1 padding>{{check.place}}</h1>\n\n  \n\n  <ion-list>\n\n    <ion-item *ngFor = "let details of detail">\n\n      <ion-label>{{details.carnum}}</ion-label>\n\n      <ion-toggle value="foo" checked={{details.toggle}} (ionChange) = "toggleButton(details.carnum, details.toggle)"></ion-toggle>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n`/*ion-inline-end:"D:\dev\mobileProject\dev2\1204\src\pages\park-details\park-details.html"*/,
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