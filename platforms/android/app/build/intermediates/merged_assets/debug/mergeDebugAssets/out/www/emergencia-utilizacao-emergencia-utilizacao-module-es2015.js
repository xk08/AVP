(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["emergencia-utilizacao-emergencia-utilizacao-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/emergencia-utilizacao/emergencia-utilizacao.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/emergencia-utilizacao/emergencia-utilizacao.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app *ngIf=\"!n1\">\r\n  <ion-content>\r\n    <ion-toolbar>\r\n      <ion-title style=\"text-align: center; font-size: 15pt\"> Opss...</ion-title>\r\n    </ion-toolbar>\r\n    <ion-card>\r\n      <ion-card-content>\r\n        Até o momento, nenhum conteúdo de emergência foi cadastrado.\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-button\r\n      expand=\"block\"\r\n      type=\"submit\"\r\n      color=\"secondary\"\r\n      (click)=\"mandaPraTelaCadastroEmergencia()\"\r\n    >\r\n      Clique para cadastrar\r\n    </ion-button>\r\n  </ion-content>\r\n</ion-app>\r\n\r\n<ion-app *ngIf=\"n1\">\r\n  <ion-header translucent>\r\n    <ion-toolbar color=\"#FFFF\">\r\n      <ion-title style=\"text-align: center; font-size: 15pt\"> Importantes para você</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-card-header>\r\n      <ion-card-subtitle style=\"font-size: 12pt; text-align: center\"\r\n        >Foto que você gosta</ion-card-subtitle\r\n      >\r\n      <ion-card [routerLink]=\"['/emergencia/emergencia-cadastro', idEmergencia]\">\r\n        <img [src]=\"foto\" width=\"380px\" height=\"320px\" />\r\n      </ion-card>\r\n    </ion-card-header>\r\n\r\n    <ion-card-header>\r\n      <ion-card-subtitle style=\"font-size: 12pt; text-align: center\"\r\n        >Frase que te inspira</ion-card-subtitle\r\n      >\r\n      <ion-card [routerLink]=\"['/emergencia/emergencia-cadastro', idEmergencia]\">\r\n        <ion-card-title>\" {{ frase }} \"</ion-card-title>\r\n      </ion-card>\r\n    </ion-card-header>\r\n\r\n    <ion-card-header>\r\n      <ion-card-subtitle style=\"font-size: 12pt; text-align: center\"\r\n        >Precisa de ajuda ? Ligue para</ion-card-subtitle\r\n      >\r\n      <ion-card>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item href=\"\" class=\"activated\" style=\"color: lightseagreen\">\r\n              <ion-label class=\"ion-text-center\">{{ nomeN1 }}</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n          <ion-col>\r\n            <ion-item href=\"\" class=\"activated\" style=\"color: lightseagreen\">\r\n              <ion-label class=\"ion-text-center\">{{ nomeN2 }}</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n          <ion-col>\r\n            <ion-item href=\"\" class=\"activated\" style=\"color: lightseagreen\">\r\n              <ion-label class=\"ion-text-center\">CVV</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n    </ion-card-header>\r\n  </ion-content>\r\n</ion-app>\r\n"

/***/ }),

/***/ "./src/app/pages/emergencia-utilizacao/emergencia-utilizacao.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/emergencia-utilizacao/emergencia-utilizacao.module.ts ***!
  \*****************************************************************************/
/*! exports provided: EmergenciaUtilizacaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergenciaUtilizacaoPageModule", function() { return EmergenciaUtilizacaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _emergencia_utilizacao_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emergencia-utilizacao.page */ "./src/app/pages/emergencia-utilizacao/emergencia-utilizacao.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





const routes = [
    {
        path: '',
        component: _emergencia_utilizacao_page__WEBPACK_IMPORTED_MODULE_3__["EmergenciaUtilizacaoPage"]
    }
];
let EmergenciaUtilizacaoPageModule = class EmergenciaUtilizacaoPageModule {
};
EmergenciaUtilizacaoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        declarations: [_emergencia_utilizacao_page__WEBPACK_IMPORTED_MODULE_3__["EmergenciaUtilizacaoPage"]]
    })
], EmergenciaUtilizacaoPageModule);



/***/ }),

/***/ "./src/app/pages/emergencia-utilizacao/emergencia-utilizacao.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/emergencia-utilizacao/emergencia-utilizacao.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VtZXJnZW5jaWEtdXRpbGl6YWNhby9lbWVyZ2VuY2lhLXV0aWxpemFjYW8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/emergencia-utilizacao/emergencia-utilizacao.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/emergencia-utilizacao/emergencia-utilizacao.page.ts ***!
  \***************************************************************************/
/*! exports provided: EmergenciaUtilizacaoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergenciaUtilizacaoPage", function() { return EmergenciaUtilizacaoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_emergenciaCadastro_emergencia_cadastro_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/emergenciaCadastro/emergencia-cadastro.service */ "./src/app/services/emergenciaCadastro/emergencia-cadastro.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let EmergenciaUtilizacaoPage = class EmergenciaUtilizacaoPage {
    constructor(emergenciaCadastroService, router, auth, navctrl) {
        this.emergenciaCadastroService = emergenciaCadastroService;
        this.router = router;
        this.auth = auth;
        this.navctrl = navctrl;
    }
    ngOnInit() {
        this.idEmergencia = this.auth.auth.currentUser.uid;
        this.list = this.emergenciaCadastroService.getTodo(this.idEmergencia).subscribe(res => {
            this.n1 = res.primeiroNumero;
            this.n2 = res.segundoNumero;
            this.frase = res.frase;
            this.foto = res.foto;
            this.nomeN1 = res.nomePrimeiroNumero;
            this.nomeN2 = res.nomeSegundoNumero;
        });
    }
    mandaPraTelaCadastroEmergencia() {
        this.navctrl.navigateForward('/emergencia/emergencia-cadastro');
        this.list;
    }
    ngOnDestroy() {
        this.list.unsubscribe();
    }
};
EmergenciaUtilizacaoPage.ctorParameters = () => [
    { type: src_app_services_emergenciaCadastro_emergencia_cadastro_service__WEBPACK_IMPORTED_MODULE_2__["EmergenciaCadastroService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
EmergenciaUtilizacaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-emergencia-utilizacao',
        template: __webpack_require__(/*! raw-loader!./emergencia-utilizacao.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/emergencia-utilizacao/emergencia-utilizacao.page.html"),
        styles: [__webpack_require__(/*! ./emergencia-utilizacao.page.scss */ "./src/app/pages/emergencia-utilizacao/emergencia-utilizacao.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_emergenciaCadastro_emergencia_cadastro_service__WEBPACK_IMPORTED_MODULE_2__["EmergenciaCadastroService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
], EmergenciaUtilizacaoPage);



/***/ })

}]);
//# sourceMappingURL=emergencia-utilizacao-emergencia-utilizacao-module-es2015.js.map