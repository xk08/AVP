(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["emergencia-utilizacao-emergencia-utilizacao-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/emergencia-utilizacao/emergencia-utilizacao.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/emergencia-utilizacao/emergencia-utilizacao.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app *ngIf=\"!n1\">\r\n  <ion-content>\r\n    <ion-toolbar>\r\n      <ion-title style=\"text-align: center; font-size: 15pt\">Opss...</ion-title>\r\n    </ion-toolbar>\r\n    <ion-card>\r\n      <ion-card-content>\r\n        Até o momento, nenhum conteúdo de emergência foi cadastrado.\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-button\r\n      expand=\"block\"\r\n      type=\"submit\"\r\n      color=\"secondary\"\r\n      (click)=\"mandaPraTelaCadastroEmergencia()\"\r\n    >\r\n      Clique para cadastrar\r\n    </ion-button>\r\n  </ion-content>\r\n</ion-app>\r\n\r\n<ion-app *ngIf=\"n1\">\r\n  <ion-header translucent>\r\n    <ion-toolbar color=\"#FFFF\">\r\n      <ion-title style=\"font-size: 17px; text-align: center;\"\r\n        >Importantes para você</ion-title\r\n      >\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-card-header>\r\n      <ion-card-subtitle\r\n        color=\"primary\"\r\n        style=\"font-size: 12pt; text-align: center;\"\r\n      >\r\n        Foto que você gosta\r\n      </ion-card-subtitle>\r\n      <ion-card>\r\n        <img [src]=\"foto\" width=\"380px\" height=\"320px\" />\r\n      </ion-card>\r\n    </ion-card-header>\r\n\r\n    <ion-card-header>\r\n      <ion-card-subtitle\r\n        color=\"primary\"\r\n        style=\"font-size: 12pt; text-align: center\"\r\n      >\r\n        Frase que te inspira\r\n      </ion-card-subtitle>\r\n      <ion-card>\r\n        <ion-card-title style=\"text-align: center;\"\r\n          >\"{{ frase }}\"</ion-card-title\r\n        >\r\n      </ion-card>\r\n    </ion-card-header>\r\n\r\n    <ion-card-header>\r\n      <ion-card-subtitle\r\n        color=\"primary\"\r\n        style=\"font-size: 12pt; text-align: center\"\r\n      >\r\n        Precisa de ajuda ? Ligue para\r\n      </ion-card-subtitle>\r\n      <ion-card style=\"background-color: floralwhite;\">\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item\r\n              href\r\n              class=\"activated\"\r\n              style=\"color: dodgerblue\"\r\n              (click)=\"callN1()\"\r\n            >\r\n              <ion-label class=\"ion-text-center\">{{ nomeN1 }}</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n          <ion-col>\r\n            <ion-item\r\n              href\r\n              class=\"activated\"\r\n              style=\"color: dodgerblue\"\r\n              (click)=\"callN2()\"\r\n            >\r\n              <ion-label class=\"ion-text-center\">{{ nomeN2 }}</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n          <ion-col>\r\n            <ion-item\r\n              href\r\n              class=\"activated\"\r\n              style=\"color: dodgerblue\"\r\n              (click)=\"callN3()\"\r\n            >\r\n              <ion-label class=\"ion-text-center\">CVV</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n      <br />\r\n      <ion-button\r\n        shape=\"round\"\r\n        fill=\"outline\"\r\n        expand=\"block\"\r\n        type=\"submit\"\r\n        class=\"login-button\"\r\n        color=\"primary\"\r\n        [routerLink]=\"['/emergencia/emergencia-cadastro', idEmergencia]\"\r\n      >\r\n        Editar estas informações\r\n      </ion-button>\r\n    </ion-card-header>\r\n  </ion-content>\r\n</ion-app>\r\n"

/***/ }),

/***/ "./src/app/core/overlay.service.ts":
/*!*****************************************!*\
  !*** ./src/app/core/overlay.service.ts ***!
  \*****************************************/
/*! exports provided: OverlayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayService", function() { return OverlayService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var OverlayService = /** @class */ (function () {
    function OverlayService(alertCtrl, loadingCtrl, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    OverlayService.prototype.alert = function (options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create(options)];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, alert];
                }
            });
        });
    };
    OverlayService.prototype.loading = function (options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ message: 'Loading...' }, options))];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        loading.dismiss();
                        return [2 /*return*/, loading];
                }
            });
        });
    };
    OverlayService.prototype.toast = function (options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ position: 'bottom', duration: 3000, showCloseButton: true, closeButtonText: 'Ok' }, options))];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, toast];
                }
            });
        });
    };
    OverlayService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
    ]; };
    OverlayService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], OverlayService);
    return OverlayService;
}());



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



/***/ }),

/***/ "./src/app/shared/components/logout-button/logout-button.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/logout-button/logout-button.component.ts ***!
  \****************************************************************************/
/*! exports provided: LogoutButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutButtonComponent", function() { return LogoutButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/overlay.service */ "./src/app/core/overlay.service.ts");





var LogoutButtonComponent = /** @class */ (function () {
    function LogoutButtonComponent(authService, menuCtrl, navCtrl, overlayService) {
        this.authService = authService;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.overlayService = overlayService;
    }
    LogoutButtonComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.menuCtrl.isEnabled(this.menuId)];
                    case 1:
                        if (!(_a.sent())) {
                            //Checka se o menu esta habilitado
                            this.menuCtrl.enable(true, this.menuId); // Se não estiver, indica o  id   do menu q qer habilitar
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LogoutButtonComponent.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.overlayService.alert({
                            //Apresenta a mensagem
                            message: 'Deseja mesmo sair ?',
                            buttons: [
                                {
                                    text: 'Sim',
                                    handler: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.authService.signOut()];
                                                case 1:
                                                    _a.sent(); // chama o método de deslogar criado
                                                    /* AULA 95 ->
                                                    Se usário estiver deslogado, desabilita o login
                                                    #USAR PARA TIPOS DE USUÁRIO NO FUTURO ???
                                                    */
                                                    return [4 /*yield*/, this.menuCtrl.enable(false, this.menuId)];
                                                case 2:
                                                    /* AULA 95 ->
                                                    Se usário estiver deslogado, desabilita o login
                                                    #USAR PARA TIPOS DE USUÁRIO NO FUTURO ???
                                                    */
                                                    _a.sent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }
                                },
                                'Não' // Não faz nada e segue a execução
                            ]
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LogoutButtonComponent.ctorParameters = function () { return [
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] },
        { type: src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_4__["OverlayService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LogoutButtonComponent.prototype, "menuId", void 0);
    LogoutButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-logout-button',
            template: "\n    <ion-buttons>\n      <ion-button (click)=\"logout()\">\n        <ion-icon name=\"exit\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_4__["OverlayService"]])
    ], LogoutButtonComponent);
    return LogoutButtonComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/menu-toggle/menu-toggle.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/menu-toggle/menu-toggle.component.ts ***!
  \************************************************************************/
/*! exports provided: MenuToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuToggleComponent", function() { return MenuToggleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* AULA 92 -> Componente genérico de menu, que pode ser chamado em qualquer momento na aplicação */

var MenuToggleComponent = /** @class */ (function () {
    function MenuToggleComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MenuToggleComponent.prototype, "menu", void 0);
    MenuToggleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-toggle',
            /* Usando HTML inline, não necessitdando de arquivos externos */
            template: "\n    <ion-buttons>\n      <ion-menu-toggle [menu]=\"menu\">\n        <ion-button>\n          <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\n        </ion-button>\n      </ion-menu-toggle>\n    </ion-buttons>\n  "
        })
    ], MenuToggleComponent);
    return MenuToggleComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_menu_toggle_menu_toggle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menu-toggle/menu-toggle.component */ "./src/app/shared/components/menu-toggle/menu-toggle.component.ts");
/* harmony import */ var _components_logout_button_logout_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/logout-button/logout-button.component */ "./src/app/shared/components/logout-button/logout-button.component.ts");







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_components_logout_button_logout_button_component__WEBPACK_IMPORTED_MODULE_6__["LogoutButtonComponent"], _components_menu_toggle_menu_toggle_component__WEBPACK_IMPORTED_MODULE_5__["MenuToggleComponent"]],
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _components_logout_button_logout_button_component__WEBPACK_IMPORTED_MODULE_6__["LogoutButtonComponent"],
                _components_menu_toggle_menu_toggle_component__WEBPACK_IMPORTED_MODULE_5__["MenuToggleComponent"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=emergencia-utilizacao-emergencia-utilizacao-module-es5.js.map