(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["emergencia-utilizacao-emergencia-utilizacao-module"],{

/***/ "./node_modules/angularfire2/firestore/index.js":
/*!******************************************************!*\
  !*** ./node_modules/angularfire2/firestore/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi93cmFwcGVyL3NyYy9maXJlc3RvcmUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw2Q0FBd0MifQ==

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/emergencia-utilizacao/emergencia-utilizacao.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/emergencia-utilizacao/emergencia-utilizacao.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <ion-grid>\r\n    <!-- alinha no centro e define pra coluna a resolucao de acordo com o tamanho da tela -->\r\n    <ion-row justify-content-center>\r\n      <!-- Deixa responsivo -->\r\n      <ion-col\r\n        size-sm=\"8\"\r\n        size-md=\"12\"\r\n        size-lg=\"3\"\r\n        size-xl=\"3\"\r\n      >\r\n\r\n        <form #form=\"ngForm\">\r\n\r\n          <ion-text text-align=\"justify-content-center\">Número de pessoas proximas a você</ion-text>\r\n\r\n          <!-- PRIMEIRO NÚMERO -->\r\n\r\n          <ion-title>\r\n            <ion-label>Foto que você gosta e admira</ion-label>\r\n          </ion-title>\r\n\r\n          <ion-item *ngFor=\"let emergencia of listEmergenciaCadastro ; let index = index\">\r\n            {{index}}Numero 01: {{emergencia.primeiroNumero}}\r\n            {{index}} Número 02: {{emergencia.segundoNumero}}\r\n            {{index}} Frase: {{emergencia.frase}}\r\n            <img [src]=\"emergencia.foto\">\r\n          </ion-item>\r\n\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n"

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




let EmergenciaUtilizacaoPage = class EmergenciaUtilizacaoPage {
    constructor(emergenciaCadastroService, router) {
        this.emergenciaCadastroService = emergenciaCadastroService;
        this.router = router;
        this.listEmergenciaCadastro = new Array();
    }
    ngOnInit() {
        //Achar uma forma de pegar só 1 index
        this.list = this.emergenciaCadastroService.getTodos().subscribe(res => {
            this.listEmergenciaCadastro = res;
        });
    }
};
EmergenciaUtilizacaoPage.ctorParameters = () => [
    { type: src_app_services_emergenciaCadastro_emergencia_cadastro_service__WEBPACK_IMPORTED_MODULE_2__["EmergenciaCadastroService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
EmergenciaUtilizacaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-emergencia-utilizacao',
        template: __webpack_require__(/*! raw-loader!./emergencia-utilizacao.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/emergencia-utilizacao/emergencia-utilizacao.page.html"),
        styles: [__webpack_require__(/*! ./emergencia-utilizacao.page.scss */ "./src/app/pages/emergencia-utilizacao/emergencia-utilizacao.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_emergenciaCadastro_emergencia_cadastro_service__WEBPACK_IMPORTED_MODULE_2__["EmergenciaCadastroService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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