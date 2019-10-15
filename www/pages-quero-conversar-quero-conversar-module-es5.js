(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-quero-conversar-quero-conversar-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/quero-conversar/quero-conversar.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/quero-conversar/quero-conversar.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"login\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Pode falar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-grid>\n      <form #form=\"ngForm\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-textarea\n                name=\"textoLivre\"\n                autofocus=\"true\"\n                [(ngModel)]='todas.textoLivre'\n                required\n                rows=\"4\"\n                cols=\"10\"\n                placeholder=\"O que você está pensando ?\"\n              ></ion-textarea>\n            </ion-item>\n          </ion-col>\n\n\n            <ion-item>\n              <ion-label>Como está se sentindo hoje ?</ion-label>\n            </ion-item>\n\n\n          <ion-item\n            *ngFor=\"let star of stars ; let i = index\"\n            tappable\n            (click)=\"starClicked(i)\"\n            [(ngModel)]=\"todas.avaliacao\"\n            name=\"avaliacao\"\n          >\n            <ion-icon [name]=\"star\"></ion-icon>\n          </ion-item>\n\n          <ion-col></ion-col>\n          <ion-col size=\"12\">\n            <ion-list>\n              <ion-grid fixed>\n\n                <ion-col size=\"12\"></ion-col>\n              </ion-grid>\n            </ion-list>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-button\n              expand=\"full\"\n              (click)=\"saveTodo()\"\n            >\n              OK\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </form>\n\n    </ion-grid>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/quero-conversar/quero-conversar.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/quero-conversar/quero-conversar.module.ts ***!
  \*****************************************************************/
/*! exports provided: QueroConversarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueroConversarPageModule", function() { return QueroConversarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _quero_conversar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quero-conversar.page */ "./src/app/pages/quero-conversar/quero-conversar.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





var routes = [
    {
        path: '',
        component: _quero_conversar_page__WEBPACK_IMPORTED_MODULE_3__["QueroConversarPage"]
    }
];
var QueroConversarPageModule = /** @class */ (function () {
    function QueroConversarPageModule() {
    }
    QueroConversarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            declarations: [_quero_conversar_page__WEBPACK_IMPORTED_MODULE_3__["QueroConversarPage"]]
        })
    ], QueroConversarPageModule);
    return QueroConversarPageModule;
}());



/***/ }),

/***/ "./src/app/pages/quero-conversar/quero-conversar.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/quero-conversar/quero-conversar.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-rating-container {\n  font-size: 30;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcXVlcm8tY29udmVyc2FyL0Q6XFx0Y2Mvc3JjXFxhcHBcXHBhZ2VzXFxxdWVyby1jb252ZXJzYXJcXHF1ZXJvLWNvbnZlcnNhci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3F1ZXJvLWNvbnZlcnNhci9xdWVyby1jb252ZXJzYXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcXVlcm8tY29udmVyc2FyL3F1ZXJvLWNvbnZlcnNhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tcmF0aW5nLWNvbnRhaW5lciB7XHJcbiAgZm9udC1zaXplOiAzMDtcclxufVxyXG4iLCJpb24tcmF0aW5nLWNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMzA7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/quero-conversar/quero-conversar.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/quero-conversar/quero-conversar.page.ts ***!
  \***************************************************************/
/*! exports provided: QueroConversarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueroConversarPage", function() { return QueroConversarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_queroConversar_quero_conversar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/queroConversar/quero-conversar.service */ "./src/app/services/queroConversar/quero-conversar.service.ts");
/* harmony import */ var src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/overlay.service */ "./src/app/core/overlay.service.ts");







var QueroConversarPage = /** @class */ (function () {
    function QueroConversarPage(route, loadingController, queroConversarService, navCtrl, overlay) {
        this.route = route;
        this.loadingController = loadingController;
        this.queroConversarService = queroConversarService;
        this.navCtrl = navCtrl;
        this.overlay = overlay;
        //Refernete ao ratebar
        this.numStars = 5;
        this.valor = 0;
        this.ionClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.stars = [];
        this.todas = {
            id: '',
            textoLivre: '',
            avaliacao: 0
        };
    }
    //RatebarStar
    QueroConversarPage.prototype.calc = function () {
        this.stars = [];
        var tmp = this.valor;
        for (var i = 0; i < this.numStars; i++, tmp--) {
            if (tmp >= 1)
                this.stars.push('star');
            else if (tmp > 0 && tmp < 1)
                this.stars.push('star-half');
            else
                this.stars.push('star-outline');
        }
    };
    QueroConversarPage.prototype.starClicked = function (index) {
        this.valor = index + 1;
        this.ionClick.emit(this.valor);
        this.calc();
        this.geral = this.valor;
    };
    QueroConversarPage.prototype.logRatingChange = function (rating) {
        console.log('changed rating: ', rating);
        // do your stuff
    };
    QueroConversarPage.prototype.ngOnInit = function () {
        this.calc();
        this.idQueroConversar = this.route.snapshot.params['id'];
        if (this.idQueroConversar) {
            this.loadTodo();
        }
    };
    QueroConversarPage.prototype.loadTodo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Carregando Dados Informados...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.queroConversarService.getTodo(this.idQueroConversar).subscribe(function (res) {
                            loading.dismiss();
                            _this.todas = res;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    QueroConversarPage.prototype.saveTodo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Salvando dados que foram informados'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        if (this.idQueroConversar) {
                            this.todas.avaliacao = this.geral;
                            this.queroConversarService.updateTodo(this.todas, this.idQueroConversar).then(function () {
                                loading.dismiss();
                                _this.navCtrl.navigateBack('/menu/home');
                            });
                        }
                        else {
                            this.todas.avaliacao = this.geral;
                            this.queroConversarService.addTodo(this.todas).then(function () {
                                loading.dismiss();
                                _this.navCtrl.navigateBack('/menu/home');
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    QueroConversarPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: src_app_services_queroConversar_quero_conversar_service__WEBPACK_IMPORTED_MODULE_5__["QueroConversarService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_6__["OverlayService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], QueroConversarPage.prototype, "numStars", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], QueroConversarPage.prototype, "valor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], QueroConversarPage.prototype, "ionClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], QueroConversarPage.prototype, "form", void 0);
    QueroConversarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quero-conversar',
            template: __webpack_require__(/*! raw-loader!./quero-conversar.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/quero-conversar/quero-conversar.page.html"),
            styles: [__webpack_require__(/*! ./quero-conversar.page.scss */ "./src/app/pages/quero-conversar/quero-conversar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            src_app_services_queroConversar_quero_conversar_service__WEBPACK_IMPORTED_MODULE_5__["QueroConversarService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_6__["OverlayService"]])
    ], QueroConversarPage);
    return QueroConversarPage;
}());



/***/ }),

/***/ "./src/app/services/queroConversar/quero-conversar.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/services/queroConversar/quero-conversar.service.ts ***!
  \********************************************************************/
/*! exports provided: QueroConversarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueroConversarService", function() { return QueroConversarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var QueroConversarService = /** @class */ (function () {
    function QueroConversarService(db) {
        this.todosCollection = db.collection('QueroConversar'); // Criando a coleção
    }
    QueroConversarService.prototype.getTodos = function () {
        return this.todosCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
    };
    QueroConversarService.prototype.getTodo = function (id) {
        return this.todosCollection.doc(id).valueChanges();
    };
    QueroConversarService.prototype.updateTodo = function (toda, id) {
        return this.todosCollection.doc(id).update(toda);
    };
    QueroConversarService.prototype.addTodo = function (toda) {
        return this.todosCollection.add(toda);
    };
    QueroConversarService.prototype.removeTodo = function (id) {
        return this.todosCollection.doc(id).delete();
    };
    QueroConversarService.ctorParameters = function () { return [
        { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
    ]; };
    QueroConversarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], QueroConversarService);
    return QueroConversarService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-quero-conversar-quero-conversar-module-es5.js.map