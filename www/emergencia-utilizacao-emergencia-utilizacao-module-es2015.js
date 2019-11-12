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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let OverlayService = class OverlayService {
    constructor(alertCtrl, loadingCtrl, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    alert(options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create(options);
            yield alert.present();
            return alert;
        });
    }
    loading(options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create(Object.assign({ message: 'Loading...' }, options));
            yield loading.present();
            loading.dismiss();
            return loading;
        });
    }
    toast(options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create(Object.assign({ position: 'bottom', duration: 3000, showCloseButton: true, closeButtonText: 'Ok' }, options));
            yield toast.present();
            return toast;
        });
    }
};
OverlayService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
OverlayService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], OverlayService);



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

module.exports = "button-inner {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\ndiv {\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZW1lcmdlbmNpYS11dGlsaXphY2FvL0Q6XFx0Y2Mvc3JjXFxhcHBcXHBhZ2VzXFxlbWVyZ2VuY2lhLXV0aWxpemFjYW9cXGVtZXJnZW5jaWEtdXRpbGl6YWNhby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2VtZXJnZW5jaWEtdXRpbGl6YWNhby9lbWVyZ2VuY2lhLXV0aWxpemFjYW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtBQ0NGOztBRENBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZW1lcmdlbmNpYS11dGlsaXphY2FvL2VtZXJnZW5jaWEtdXRpbGl6YWNhby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24taW5uZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbmRpdiB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cclxufVxyXG4iLCJidXR0b24taW5uZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuZGl2IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn0iXX0= */"

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
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "./node_modules/@ionic-native/sms/ngx/index.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");









let EmergenciaUtilizacaoPage = class EmergenciaUtilizacaoPage {
    constructor(emergenciaCadastroService, router, auth, navctrl, callNumber, sms, //Voltar nessa parte
    androidPermissions) {
        this.emergenciaCadastroService = emergenciaCadastroService;
        this.router = router;
        this.auth = auth;
        this.navctrl = navctrl;
        this.callNumber = callNumber;
        this.sms = sms;
        this.androidPermissions = androidPermissions;
    }
    ngOnInit() {
        this.idEmergencia = this.auth.auth.currentUser.uid;
        this.list = this.emergenciaCadastroService
            .getTodo(this.idEmergencia)
            .subscribe(res => {
            this.n1 = res.primeiroNumero;
            this.n2 = res.segundoNumero;
            this.frase = res.frase;
            this.foto = res.foto;
            this.nomeN1 = res.nomePrimeiroNumero;
            this.nomeN2 = res.nomeSegundoNumero;
            this.n1publico = this.n1;
            this.n2publico = this.n2;
            this.n3cvv = "188";
        });
    }
    //Mecanismo de ligação
    callN1() {
        this.callNumber
            .callNumber(this.n1publico, true)
            .then(res => console.log("Ligando para " + this.n1publico, res))
            .catch(err => console.log("Falhou", err));
    }
    callN2() {
        this.callNumber
            .callNumber(this.n2publico, true)
            .then(res => console.log("Ligando para " + this.n2publico, res))
            .catch(err => console.log("Falhou", err));
    }
    callN3() {
        this.callNumber
            .callNumber(this.n3cvv, true)
            .then(res => console.log("Ligando para " + this.n3cvv, res))
            .catch(err => console.log("Falhou", err));
    }
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
    mandaPraTelaCadastroEmergencia() {
        this.navctrl.navigateForward("/emergencia/emergencia-cadastro");
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"] },
    { type: _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_7__["SMS"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__["AndroidPermissions"] }
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/overlay.service */ "./src/app/core/overlay.service.ts");





let LogoutButtonComponent = class LogoutButtonComponent {
    constructor(authService, menuCtrl, navCtrl, overlayService) {
        this.authService = authService;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.overlayService = overlayService;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!(yield this.menuCtrl.isEnabled(this.menuId))) {
                //Checka se o menu esta habilitado
                this.menuCtrl.enable(true, this.menuId); // Se não estiver, indica o  id   do menu q qer habilitar
            }
        });
    }
    logout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.overlayService.alert({
                //Apresenta a mensagem
                message: 'Deseja mesmo sair ?',
                buttons: [
                    {
                        text: 'Sim',
                        handler: () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            yield this.authService.signOut(); // chama o método de deslogar criado
                            /* AULA 95 ->
                            Se usário estiver deslogado, desabilita o login
                            #USAR PARA TIPOS DE USUÁRIO NO FUTURO ???
                            */
                            yield this.menuCtrl.enable(false, this.menuId);
                            // this.navCtrl.navigateRoot('login'); // Finaliza as paginas e dieciona pro login
                        })
                    },
                    'Não' // Não faz nada e segue a execução
                ]
            });
        });
    }
};
LogoutButtonComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] },
    { type: src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_4__["OverlayService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], LogoutButtonComponent.prototype, "menuId", void 0);
LogoutButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-logout-button',
        template: `
    <ion-buttons>
      <ion-button (click)="logout()">
        <ion-icon name="exit" slot="icon-only"></ion-icon>
      </ion-button>
    </ion-buttons>
  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
        src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_4__["OverlayService"]])
], LogoutButtonComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

/* AULA 92 -> Componente genérico de menu, que pode ser chamado em qualquer momento na aplicação */

let MenuToggleComponent = class MenuToggleComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MenuToggleComponent.prototype, "menu", void 0);
MenuToggleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-toggle',
        /* Usando HTML inline, não necessitdando de arquivos externos */
        template: `
    <ion-buttons>
      <ion-menu-toggle [menu]="menu">
        <ion-button>
          <ion-icon slot="icon-only" name="menu"></ion-icon>
        </ion-button>
      </ion-menu-toggle>
    </ion-buttons>
  `
    })
], MenuToggleComponent);



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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_menu_toggle_menu_toggle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menu-toggle/menu-toggle.component */ "./src/app/shared/components/menu-toggle/menu-toggle.component.ts");
/* harmony import */ var _components_logout_button_logout_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/logout-button/logout-button.component */ "./src/app/shared/components/logout-button/logout-button.component.ts");







let SharedModule = class SharedModule {
};
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



/***/ })

}]);
//# sourceMappingURL=emergencia-utilizacao-emergencia-utilizacao-module-es2015.js.map