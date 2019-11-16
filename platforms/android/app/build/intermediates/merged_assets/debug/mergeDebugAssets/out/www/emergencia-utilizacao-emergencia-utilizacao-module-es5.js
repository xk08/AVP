(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["emergencia-utilizacao-emergencia-utilizacao-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/emergencia-utilizacao/emergencia-utilizacao.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/emergencia-utilizacao/emergencia-utilizacao.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app *ngIf=\"!n1\">\r\n  <ion-content>\r\n    <ion-toolbar>\r\n      <ion-title style=\"text-align: center; font-size: 15pt\">Opss...</ion-title>\r\n    </ion-toolbar>\r\n    <ion-card>\r\n      <ion-card-content>\r\n        Até o momento, nenhum conteúdo de emergência foi cadastrado.\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-button\r\n      expand=\"block\"\r\n      type=\"submit\"\r\n      color=\"secondary\"\r\n      (click)=\"mandaPraTelaCadastroEmergencia()\"\r\n    >\r\n      Clique para cadastrar\r\n    </ion-button>\r\n  </ion-content>\r\n</ion-app>\r\n\r\n<ion-app *ngIf=\"n1\">\r\n  <ion-header translucent>\r\n    <ion-toolbar color=\"#FFFF\">\r\n      <ion-title style=\"font-size: 17px; text-align: center;\"\r\n        >Importantes para você</ion-title\r\n      >\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-card-header>\r\n      <ion-card-subtitle\r\n        color=\"primary\"\r\n        style=\"font-size: 12pt; text-align: center;\"\r\n      >\r\n        Foto que você gosta\r\n      </ion-card-subtitle>\r\n      <ion-card>\r\n        <img [src]=\"foto\" width=\"380px\" height=\"320px\" />\r\n      </ion-card>\r\n    </ion-card-header>\r\n\r\n    <ion-card-header>\r\n      <ion-card-subtitle\r\n        color=\"primary\"\r\n        style=\"font-size: 12pt; text-align: center\"\r\n      >\r\n        Frase que te inspira\r\n      </ion-card-subtitle>\r\n      <ion-card>\r\n        <ion-card-title style=\"text-align: center;\"\r\n          >\"{{ frase }}\"</ion-card-title\r\n        >\r\n      </ion-card>\r\n    </ion-card-header>\r\n\r\n    <ion-card-header>\r\n      <ion-card-subtitle\r\n        color=\"primary\"\r\n        style=\"font-size: 12pt; text-align: center\"\r\n      >\r\n        Precisa de ajuda ? Ligue para\r\n      </ion-card-subtitle>\r\n      <ion-card style=\"background-color: floralwhite;\">\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item\r\n              href\r\n              class=\"activated\"\r\n              style=\"color: dodgerblue\"\r\n              (click)=\"callN1()\"\r\n            >\r\n              <ion-label class=\"ion-text-center\">{{ nomeN1 }}</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n          <ion-col>\r\n            <ion-item\r\n              href\r\n              class=\"activated\"\r\n              style=\"color: dodgerblue\"\r\n              (click)=\"callN2()\"\r\n            >\r\n              <ion-label class=\"ion-text-center\">{{ nomeN2 }}</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n          <ion-col>\r\n            <ion-item\r\n              href\r\n              class=\"activated\"\r\n              style=\"color: dodgerblue\"\r\n              (click)=\"callN3()\"\r\n            >\r\n              <ion-label class=\"ion-text-center\">CVV</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n      <br />\r\n      <ion-button\r\n        shape=\"round\"\r\n        fill=\"outline\"\r\n        expand=\"block\"\r\n        type=\"submit\"\r\n        class=\"login-button\"\r\n        color=\"primary\"\r\n        [routerLink]=\"['/emergencia/emergencia-cadastro', idEmergencia]\"\r\n      >\r\n        Editar estas informações\r\n      </ion-button>\r\n    </ion-card-header>\r\n  </ion-content>\r\n</ion-app>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _emergencia_utilizacao_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emergencia-utilizacao.page */ "./src/app/pages/emergencia-utilizacao/emergencia-utilizacao.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





var routes = [
    {
        path: '',
        component: _emergencia_utilizacao_page__WEBPACK_IMPORTED_MODULE_3__["EmergenciaUtilizacaoPage"]
    }
];
var EmergenciaUtilizacaoPageModule = /** @class */ (function () {
    function EmergenciaUtilizacaoPageModule() {
    }
    EmergenciaUtilizacaoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            declarations: [_emergencia_utilizacao_page__WEBPACK_IMPORTED_MODULE_3__["EmergenciaUtilizacaoPage"]]
        })
    ], EmergenciaUtilizacaoPageModule);
    return EmergenciaUtilizacaoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/emergencia-utilizacao/emergencia-utilizacao.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/emergencia-utilizacao/emergencia-utilizacao.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button-inner {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\ndiv {\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZW1lcmdlbmNpYS11dGlsaXphY2FvL0Q6XFxtYXJjb3NcXFRDQ1xcdGNjL3NyY1xcYXBwXFxwYWdlc1xcZW1lcmdlbmNpYS11dGlsaXphY2FvXFxlbWVyZ2VuY2lhLXV0aWxpemFjYW8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9lbWVyZ2VuY2lhLXV0aWxpemFjYW8vZW1lcmdlbmNpYS11dGlsaXphY2FvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7QUNDRjs7QURDQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VtZXJnZW5jaWEtdXRpbGl6YWNhby9lbWVyZ2VuY2lhLXV0aWxpemFjYW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uLWlubmVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5kaXYge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuXHJcbn1cclxuIiwiYnV0dG9uLWlubmVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmRpdiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_emergenciaCadastro_emergencia_cadastro_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/emergenciaCadastro/emergencia-cadastro.service */ "./src/app/services/emergenciaCadastro/emergencia-cadastro.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "./node_modules/@ionic-native/sms/ngx/index.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");









var EmergenciaUtilizacaoPage = /** @class */ (function () {
    function EmergenciaUtilizacaoPage(emergenciaCadastroService, router, auth, navctrl, callNumber, sms, //Voltar nessa parte
    androidPermissions) {
        this.emergenciaCadastroService = emergenciaCadastroService;
        this.router = router;
        this.auth = auth;
        this.navctrl = navctrl;
        this.callNumber = callNumber;
        this.sms = sms;
        this.androidPermissions = androidPermissions;
    }
    EmergenciaUtilizacaoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.idEmergencia = this.auth.auth.currentUser.uid;
        this.list = this.emergenciaCadastroService
            .getTodo(this.idEmergencia)
            .subscribe(function (res) {
            _this.n1 = res.primeiroNumero;
            _this.n2 = res.segundoNumero;
            _this.frase = res.frase;
            _this.foto = res.foto;
            _this.nomeN1 = res.nomePrimeiroNumero;
            _this.nomeN2 = res.nomeSegundoNumero;
            _this.n1publico = _this.n1;
            _this.n2publico = _this.n2;
            _this.n3cvv = "188";
        });
    };
    //Mecanismo de ligação
    EmergenciaUtilizacaoPage.prototype.callN1 = function () {
        var _this = this;
        this.callNumber
            .callNumber(this.n1publico, true)
            .then(function (res) { return console.log("Ligando para " + _this.n1publico, res); })
            .catch(function (err) { return console.log("Falhou", err); });
    };
    EmergenciaUtilizacaoPage.prototype.callN2 = function () {
        var _this = this;
        this.callNumber
            .callNumber(this.n2publico, true)
            .then(function (res) { return console.log("Ligando para " + _this.n2publico, res); })
            .catch(function (err) { return console.log("Falhou", err); });
    };
    EmergenciaUtilizacaoPage.prototype.callN3 = function () {
        var _this = this;
        this.callNumber
            .callNumber(this.n3cvv, true)
            .then(function (res) { return console.log("Ligando para " + _this.n3cvv, res); })
            .catch(function (err) { return console.log("Falhou", err); });
    };
    /*
    teste() {
      var options: {
        replaceLineBreaks: true;
        android: {
          intent: "INTENT";
        };
      };
      this.sms
        .send(this.n1publico, "Marcos está em perigo, ligue agora mesmo", options)
        .then(() => {
          console.log("sms funcionou");
        })
        .catch(err => {
          alert(JSON.stringify(err));
        });
    }
    */
    EmergenciaUtilizacaoPage.prototype.mandaPraTelaCadastroEmergencia = function () {
        this.navctrl.navigateForward("/emergencia/emergencia-cadastro");
        this.list;
    };
    EmergenciaUtilizacaoPage.prototype.ngOnDestroy = function () {
        this.list.unsubscribe();
    };
    EmergenciaUtilizacaoPage.ctorParameters = function () { return [
        { type: src_app_services_emergenciaCadastro_emergencia_cadastro_service__WEBPACK_IMPORTED_MODULE_2__["EmergenciaCadastroService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
        { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"] },
        { type: _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_7__["SMS"] },
        { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__["AndroidPermissions"] }
    ]; };
    EmergenciaUtilizacaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-emergencia-utilizacao",
            template: __webpack_require__(/*! raw-loader!./emergencia-utilizacao.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/emergencia-utilizacao/emergencia-utilizacao.page.html"),
            styles: [__webpack_require__(/*! ./emergencia-utilizacao.page.scss */ "./src/app/pages/emergencia-utilizacao/emergencia-utilizacao.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_emergenciaCadastro_emergencia_cadastro_service__WEBPACK_IMPORTED_MODULE_2__["EmergenciaCadastroService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"],
            _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_7__["SMS"],
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__["AndroidPermissions"]])
    ], EmergenciaUtilizacaoPage);
    return EmergenciaUtilizacaoPage;
}());



/***/ })

}]);
//# sourceMappingURL=emergencia-utilizacao-emergencia-utilizacao-module-es5.js.map