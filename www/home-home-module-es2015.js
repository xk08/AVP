(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n\r\n    <ion-buttons>\r\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\r\n      <ion-button\r\n        shape=\"round\"\r\n        fill=\"outline\"\r\n        (click)=\"direcionaPraTela()\"\r\n      >\r\n        Quero Conversar\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-fab\r\n  vertical=\"bottom\"\r\n  horizontal=\"end\"\r\n  slot=\"fixed\"\r\n>\r\n  <ion-fab-button\r\n    routerLink=\"/emergencia\"\r\n    routerDirection=\"forward\"\r\n  >\r\n    S.O.S\r\n  </ion-fab-button>\r\n</ion-fab>\r\n\r\n<ion-content>\r\n    <ion-header translucent>\r\n        <ion-toolbar>\r\n          <ion-title style=\"text-align: center; font-size: 15pt\"> Recomenados para você</ion-title>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n\r\n      <ion-card>\r\n          <img src=\"../../../assets/img/fraseamigos.PNG\"/>\r\n        </ion-card>\r\n      \r\n        <ion-card>\r\n          <img src=\"../../../assets/img/serfeliz.PNG\"/>\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Video do Youtube</ion-card-subtitle>\r\n            <ion-card-title>O que é felicidade pra você ?</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n              entendi ao longo da jornada que sentir-se feliz não depende do que se tem 💰 \r\n               mas sim, do quanto somos capazes de gerenciar a si mesmo, o motivo é simples... #redpill\r\n          </ion-card-content>\r\n\r\n            <ion-item href=\"\" class=\"activated\" style=\"color: lightseagreen\">\r\n                <ion-label class=\"ion-text-center\">Assistir ao video completo</ion-label>\r\n            </ion-item>\r\n        </ion-card>\r\n      \r\n        \r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-subtitle>Frase do dia</ion-card-subtitle>\r\n              <ion-card-title>Sobre o amor</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n                “Você é quem decide o que vai ser eterno em você, no seu coração.\r\n                Deus nos dá o dom de eternizar em nós o que vale a pena, e esquecer definitivamente aquilo que não vale.”\r\n            </ion-card-content>\r\n\r\n            <ion-item href=\"\" class=\"activated\" style=\"color: lightseagreen\">\r\n                <ion-label class=\"ion-text-center\">Ver mais informações</ion-label>\r\n            </ion-item>\r\n          </ion-card>\r\n           \r\n          <ion-card>\r\n              <img src=\"../../../assets/img/tulipas.PNG\"/>\r\n              <ion-card-header>\r\n                <ion-card-subtitle>Foto do dia</ion-card-subtitle>\r\n                <ion-card-title>A vida é colorida, aproveite todos os momentos.</ion-card-title>\r\n              </ion-card-header>\r\n             \r\n                <ion-item href=\"\" class=\"activated\" style=\"color: rgb(101, 221, 215)\">\r\n                    <ion-label class=\"ion-text-center\">Ver mais informações</ion-label>\r\n                </ion-item>\r\n    \r\n            </ion-card>\r\n\r\n            <ion-card>\r\n                <img src=\"../../../assets/img/abrirmente.PNG\"/>\r\n                <ion-card-header>\r\n                  <ion-card-subtitle>Video do Youtube</ion-card-subtitle>\r\n                  <ion-card-title>Compreenda a sí mesmo</ion-card-title>\r\n                </ion-card-header>\r\n                <ion-card-content>\r\n                    Compreenda  A Si Mesmo E Ao Universo Com Esse Vídeo! Um vídeo para pararmos e refletirmos sobre tudo aquilo que está a nossa volta e as crenças que temos sobre FOCO e PRESENÇA\r\n                    Depois desse vídeo você vai saber a como aproveitar a vida muito mais!\r\n                </ion-card-content>\r\n      \r\n                  <ion-item href=\"\" class=\"activated\" style=\"color: lightseagreen\">\r\n                      <ion-label class=\"ion-text-center\">Assistir ao video completo</ion-label>\r\n                  </ion-item>\r\n              </ion-card>\r\n\r\n              <ion-card>\r\n                  <ion-card-header>\r\n                    <ion-card-subtitle>Frase</ion-card-subtitle>\r\n                    <ion-card-title>Familia</ion-card-title>\r\n                  </ion-card-header>\r\n                  <ion-card-content>\r\n                      Amo minha família do jeito que é; pode não ser perfeita, mas o que importa é que nela sobram amor e compreensão.\r\n                  </ion-card-content>\r\n      \r\n                  <ion-item href=\"\" class=\"activated\" style=\"color: lightseagreen\">\r\n                      <ion-label class=\"ion-text-center\">Ver mais informações</ion-label>\r\n                  </ion-item>\r\n                </ion-card>\r\n\r\n                <ion-card>\r\n                    <ion-card-header>\r\n                      <ion-card-subtitle>Frase</ion-card-subtitle>\r\n                      <ion-card-title>Amigos</ion-card-title>\r\n                    </ion-card-header>\r\n                    <ion-card-content>\r\n                        Enquanto alguns escolhem pessoas perfeitas, eu escolho as que me fazem bem.\r\n                    </ion-card-content>\r\n        \r\n                    <ion-item href=\"\" class=\"activated\" style=\"color: lightseagreen\">\r\n                        <ion-label class=\"ion-text-center\">Ver mais informações</ion-label>\r\n                    </ion-item>\r\n                  </ion-card>\r\n            \r\n           \r\n           \r\n\r\n       \r\n\r\n\r\n   \r\n</ion-content>\r\n"

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

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button-inner {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-card {\n  background-color: #d8eff4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9EOlxcdGNjL3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbi1pbm5lciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGVmZjQgOyBcclxufVxyXG4iLCJidXR0b24taW5uZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW9uLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhlZmY0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let HomePage = class HomePage {
    constructor(navctrl) {
        this.navctrl = navctrl;
    }
    ngOnInit() { }
    direcionaPraTela() {
        this.navctrl.navigateForward('quero-conversar');
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], HomePage);



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
//# sourceMappingURL=home-home-module-es2015.js.map