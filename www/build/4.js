webpackJsonp([4],{

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkDetailsPageModule", function() { return ParkDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__park_details__ = __webpack_require__(340);
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

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParkDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_dialogs__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
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
        this.toggle = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/parks/' + this.key + '/detail/');
    }
    ParkDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.parkDetailRef.child('detail').on('value', function (data) {
            data.forEach(function (data) {
                _this.detail.push({
                    carnum: data.val().carnum,
                    toggle: data.val().toggle,
                    id: data.val().id
                });
            });
        });
    };
    ParkDetailsPage.prototype.toggleButton = function (details) {
        window.alert(details.id);
        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/parks/' + this.key + '/detail/' + details.id + '/')
            .update({ carnum: details.carnum, toggle: !details.toggle });
        //   this.toggle.on('value', data=>{
        //     data.forEach(data => {
        //      if(data.val().carnum == details.carnum){
        //        this.toggle.update(details,{carnum:details.carnum , toggle:!details.toggle});
        //      }
        //   }); 
        //  });
    };
    ParkDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-park-details',template:/*ion-inline-start:"C:\Users\pv17\1203\src\pages\park-details\park-details.html"*/`<!--\n  Generated template for the ParkDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Parking Info</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <h1 padding>{{check.place}}</h1>\n  \n  <ion-list>\n    <ion-item *ngFor = "let details of detail">\n      <ion-label>{{details.carnum}}</ion-label>\n      <ion-toggle value="foo" checked={{details.toggle}} (ionChange) = "toggleButton(details)"></ion-toggle>\n    </ion-item>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"C:\Users\pv17\1203\src\pages\park-details\park-details.html"*/,
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